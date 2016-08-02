import * as actions from '../../src/actions/FilterActions';
import * as types from '../../src/constants/ActionTypes';
import expect from 'expect';


describe('filter actions', () => {
  it('should create an action to change the filter', () => {
    const text = 'villa';
    const expectedAction = {
      type: types.UPDATE_FILTER,
      text
    };
    expect(actions.updateFilter(text)).toEqual(expectedAction);
  });
});
