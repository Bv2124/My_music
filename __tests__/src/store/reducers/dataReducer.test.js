import dataReducer from '../../../../src/store/reducers/dataReducer';
import { SET_STRING_DATA, SET_OBJECT_DATA } from '../../../../src/store/actions/dataActions';

describe('dataReducer', () => {
  const initialState = {
    currentString: 'Initial String',
    currentObject: { message: 'Initial Object' },
  };

  it('should return the initial state', () => {
    expect(dataReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_STRING_DATA', () => {
    const newString = 'Updated String';
    const action = { type: SET_STRING_DATA, payload: newString };
    const expectedState = {
      ...initialState,
      currentString: newString,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_STRING_DATA with empty string', () => {
    const newString = '';
    const action = { type: SET_STRING_DATA, payload: newString };
    const expectedState = {
      ...initialState,
      currentString: newString,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_OBJECT_DATA', () => {
    const newObject = { info: 'Updated Object', value: 42 };
    const action = { type: SET_OBJECT_DATA, payload: newObject };
    const expectedState = {
      ...initialState,
      currentObject: newObject,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_OBJECT_DATA with empty object', () => {
    const newObject = {};
    const action = { type: SET_OBJECT_DATA, payload: newObject };
    const expectedState = {
      ...initialState,
      currentObject: newObject,
    };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_OBJECT_DATA, replacing previous object', () => {
    const firstObject = { test: "data" }
    let state = dataReducer(initialState, { type: SET_OBJECT_DATA, payload: firstObject });

    const newObject = { completely: 'different' };
    const action = { type: SET_OBJECT_DATA, payload: newObject };
    const expectedState = {
      ...initialState,
      currentObject: newObject,
    };
    expect(dataReducer(state, action)).toEqual(expectedState);
  });

  it('should return the current state for an unrecognized action', () => {
    const action = { type: 'UNKNOWN_ACTION', payload: 'some data' };
    expect(dataReducer(initialState, action)).toEqual(initialState);
  });
});
