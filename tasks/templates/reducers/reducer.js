// TODO - import some action constants
import { SOME_ACTION } from '../constants/actions';

const initialState = {};

export default function <%= module %>(state = initialState, action) {

  switch (action.type) {

    case SOME_ACTION:
      return Object.assign({}, state, {});

    default:
      return state;

  }

}
