import expect from 'expect';
import posts from '../../src/reducers/posts';
import * as types from '../../src/constants/ActionTypes';

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(
      posts(undefined, {})
    ).toEqual({
      error: false,
      isFetching: false,
      items: []
    });
  });

  it('should handle REQUEST_POSTS', () => {
    expect(
      posts('', {
        type: types.REQUEST_POSTS,
      })
    ).toEqual({
      error: false,
      isFetching: true
    });
  });
  it('should handle RECEIVE_POSTS', () => {
    expect(
      posts('', {
        type: types.RECEIVE_POSTS,
        posts: [{ name: 'a house' }, { name: 'another house' }]
      })
    ).toEqual({
      error: false,
      isFetching: false,
      items: [{ name: 'a house' }, { name: 'another house' }]
    });
  });
});
