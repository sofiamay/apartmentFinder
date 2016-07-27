import { UPDATE_FILTER } from '../constants/ActionTypes';

export default function posts(state = '', action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.text;
    default:
      return state;
  }
}
