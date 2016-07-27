
import fetch from 'isomorphic-fetch';
import { REQUEST_POSTS, RECEIVE_POSTS, THROW_POSTS_ERROR } from '../constants/ActionTypes';

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

export function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json,
    receivedAt: Date.now()
  };
}

export function throwPostsError(json) {
  return {
    type: THROW_POSTS_ERROR,
    error: json,
    receivedAt: Date.now()
  };
}

export function fetchPosts() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch('https://www.onerent.co/api/Property/availableProperties', {
      method: 'post',
    })
      .then(response => response.json())
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receivePosts(json))
      )
      .catch(error => dispatch(throwPostsError(error)));

      // In a real world app, you also want to
      // catch any error in the network call.
  };
}
