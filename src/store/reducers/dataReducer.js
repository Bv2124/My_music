import { SET_STRING_DATA, SET_OBJECT_DATA } from '../actions/dataActions';

const initialState = {
  currentString: 'Initial String',
  currentObject: { message: 'Initial Object' },
};

/**
 * Reducer for managing string and object data.
 * @param {object} state - The current state.
 * @param {object} action - The action to be handled.
 * @returns {object} The new state.
 */
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STRING_DATA:
      return {
        ...state,
        currentString: action.payload,
      };
    case SET_OBJECT_DATA:
      return {
        ...state,
        currentObject: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
