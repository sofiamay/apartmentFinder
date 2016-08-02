import expect from 'expect';
import filter from '../../src/reducers/filter';
import * as types from '../../src/constants/ActionTypes';

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(
      filter(undefined, {})
    ).toEqual([]);
  });

  it('should handle UPDATE_FILTER', () => {
    expect(
      filter('', {
        type: types.UPDATE_FILTER,
        text: 'villa'
      })
    ).toEqual('villa');
  });
});
