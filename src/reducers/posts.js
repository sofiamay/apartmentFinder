import { REQUEST_POSTS, RECEIVE_POSTS, THROW_POSTS_ERROR } from '../constants/ActionTypes';

export default function posts(state = {
  isFetching: false,
  error: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    case THROW_POSTS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
