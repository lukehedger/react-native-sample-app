# Application Architecture

## General structure

- `index.android.js`/`index.ios.js` - Both native environments look for their own entry when running the application. These files are identical and simply register and start the app.
- `app/index.js` - builds the Redux Store (app state) and renders the App Container
- `app/containers/App.js` - sets up the app's routing and renders the initial route Container

## Store

The Store holds the application’s state tree. The app's Store is created in `store/configureStore.js` using `createStore(reducer, initialState)` - we pass it a single reducer, as all reducers are combined in `reducer/index.js` using `combineReducers(reducers)`.

[Redux - Store](http://redux.js.org/docs/basics/Store.html)

### Data Flow

```
Component [callback] -> Container [dispatch] -> Action [dispatched] -> Store [calls(args)] -> Sagas [effects] -> Reducer [computes state] -> Store [saves state] -> Container [refreshed] -> Component [refreshed]
```

See more about [Redux's unidirectional data flow](http://rackt.github.io/redux/docs/basics/DataFlow.html)

## Reducers

A Redux reducer is a function that accepts the application's state (or part of it) and an action and returns a new state based on the previous state and the action. In the reducer composition pattern (abstracting/combining reducers based on their roles) a reducer manages its own part of the global state - rather than a single, encompassing reducer that takes the entire app's state as an argument. The `state` parameter is different for every reducer and corresponds to the part of the state it manages. A reducer should always be a **pure** function - ie. without side-effects such as mutating its arguments or making API calls.

The state must never be mutated directly - instead create a copy with [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) and return the new object.

[Redux - Reducers](http://redux.js.org/docs/basics/Reducers.html)

## Actions

The files in `action/*.js` are actually Action Creators (a function that creates an action) that contain actions (payloads of information that represent an intention to change the application's state). These Action Creators are turned into an object with each Action Creator wrapped in a dispatch call - using [bindActionCreators](http://rackt.github.io/redux/docs/api/bindActionCreators.html) on the Container - and passed to a component as `props`.

[Redux - Actions](http://redux.js.org/docs/basics/Actions.html)

## Sagas

> Without middleware, Redux store only supports synchronous data flow
>
> -- [Redux](http://rackt.org/redux/docs/advanced/AsyncFlow.html)

The Redux Store can be enhanced by Middleware to create [asynchronous Actions](http://rackt.org/redux/docs/advanced/AsyncActions.html). The (current) standard for building async Redux apps is to use [redux-thunk](https://github.com/gaearon/redux-thunk) and/or [redux-promise](https://github.com/acdlite/redux-promise). However, both of these methods tend to bloat complex apps (specifically, the Actions) and makes unit testing more painful and verbose. A lot of the app's logic becomes tied to the Actions, which are designed simply to send data to the Store (indeed, "*They are the only source of information for the store.*") but it makes less sense for them to also process data requests. [Declarative Effects](http://yelouafi.github.io/redux-saga/docs/basics/DeclarativeEffects.html) allow us to test the Saga logic without having to mock API requests/data - we simply test that values are yielded correctly and successively.

Sagas keep the app's side effect logic (complex/async operations, like API calls) in a central place, rather than in the Actions. The logic of the application is thus held in two places:

- Reducers are responsible for handling state transitions between Actions
- Sagas are responsible for orchestrating complex/asynchronous operations

Sagas are created using [Generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), which enable declarative effects and cancellation.

Sagas are Redux middleware. When the Redux Store is configured (`app/store/configureStore`) Sagas are injected into the Store via the sagaMiddleware() function. Once the Store is created the Sagas are executed but will wait until the initial `yield` returns an expected value before progressing to the next step (this is usually the result of an Action dispatched from the application or a resolved promise).

A Saga ends after the final `yield` is fulfilled. The Saga then restarts and waits for the initial `yield` again.

### Effect creators

Effects are simply an abstraction of waiting for a future action or the result of a dispatch. Sagas allow the composition of those Effects to implement a control flow. Effect creators do what they say: create Effects. There are various different Effect creators:

- `take`: Creates an Effect description that instructs the middleware to wait for a specified Action on the Store eg. `yield take('SOME_ACTION')`
- `call(fn, args)`: Creates an Effect description that instructs the middleware to call a function w/arguments that returns a Promise eg. `const todos = yield call(fetch, '/todos')`
- `put`: Creates an Effect description that instructs the middleware to dispatch an Action to the Store eg. `yield put({ type: 'SOME_ACTION', payload: response })`
- `fork`: Similar to `call` but invokes a *non-blocking* call - the middleware doesn't suspend the Generator

[Redux - Sagas](https://github.com/yelouafi/redux-saga/)

## Containers (aka smart components)

Containers are similar to Views: they render Components with Actions bound to the them. Containers directly call Actions and provide them as callbacks to Components - Components do not directly call Actions. They are also known as ['Container Components'](https://medium.com/@learnreact/container-components-c0e67432e005) or *'smart'* components. These components handle Redux setup, data fetching, hold state and pass it to Components. They do not usually render any markup to the DOM or have their own styles.

Container Components are converted to *['smart components'](https://github.com/rackt/react-redux#smart-component-is-connect-ed-to-redux)* using the `connect()` function provided by the `react-redux` API.

> The connect() function lets you specify which exact state from the Redux store your component wants to track. This lets you subscribe on any level of granularity.

This allows the 'dumb' Components to be reused and not bound to specific data.

## Components (aka dumb components)

React components that can have UI triggers to dispatch Actions and render the application's state on the client via component-specific `props` passed to it from its Container. These components do not normally know about Redux or deal with it directly - they can be referred to as *['dumb components'](https://github.com/rackt/react-redux#dumb-component-is-unaware-of-redux)*. Dumb Components have no dependencies on Actions or Stores, receive data (state) and callbacks via `props` - although they don't have their *own* state. They render markup to the DOM and have styles.

Read more about [smart/dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
