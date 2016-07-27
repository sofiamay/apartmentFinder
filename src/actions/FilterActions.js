import { UPDATE_FILTER } from '../constants/ActionTypes';

export function updateFilter(filter) {
  return {
    type: UPDATE_FILTER,
    text: filter,
  };
}
