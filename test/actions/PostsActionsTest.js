import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/PostsActions';
import * as types from '../../src/constants/ActionTypes';
import nock from 'nock';
import expect from 'expect';

import tk from'timekeeper';
const time = Date.now();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = [ { type: 'REQUEST_POSTS' }, { posts: [ { images: [{labels: {}}], labels: {} } ], receivedAt: 1470101182102, type: 'RECEIVE_POSTS' } ];

describe('post actions', () => {
  before(() => {
    tk.freeze(time);
  });
  it('should create an action to change the state to request posts', () => {
    const expectedAction = {
      type: types.REQUEST_POSTS,
    };
    expect(actions.requestPosts()).toEqual(expectedAction);
  });
  it('should create an action receive posts', () => {
    const json = [
      { name: 'a house' },
      { name: 'another house' },
    ];
    const expectedAction = {
      type: types.RECEIVE_POSTS,
      posts: json,
      receivedAt: Date.now()
    };
    expect(actions.receivePosts(json)).toEqual(expectedAction);
  });
  it('should create an action to throw an error', () => {
    const json = { error: 'A sample error' };
    const expectedAction = {
      type: types.THROW_POSTS_ERROR,
      error: json,
      receivedAt: Date.now()
    };
    expect(actions.throwPostsError(json)).toEqual(expectedAction);
  });
  after(() => {
    tk.reset(time);
  });
});

describe('async actions', () => {
  before(() => {
    tk.freeze(time);
  });
  afterEach(() => {
    nock.cleanAll();
  });
  after(() => {
    tk.reset(time);
  });
  it('creates error when fetching house data has been done and format is incorrect', () => {
    nock('https://www.onerent.co')
      .post('/api/Property/availableProperties')
      .reply(200, response);

    const expectedActions = [
      { type: types.REQUEST_POSTS },
      { error: new TypeError('Cannot read property \'forEach\' of undefined'),
        receivedAt: Date.now(),
        type: 'THROW_POSTS_ERROR' }
    ];
    const store = mockStore({ posts: [] });

    return store.dispatch(actions.fetchPosts())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
