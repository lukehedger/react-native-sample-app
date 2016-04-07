export function fake(delay) {
    return new Promise(resolve =>
      setTimeout( () => resolve(true), delay )
    )
}
