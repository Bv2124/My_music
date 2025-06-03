// Action types
export const SET_STRING_DATA = 'SET_STRING_DATA';
export const SET_OBJECT_DATA = 'SET_OBJECT_DATA';

// Action creators
/**
 * Creates an action to set or update a string in the Redux store.
 * @param {string} text - The string data to be set.
 * @returns {object} Action object with type SET_STRING_DATA and payload.
 */
export const setStringData = (text) => ({
  type: SET_STRING_DATA,
  payload: text,
});

/**
 * Creates an action to set or update an object in the Redux store.
 * @param {object} data - The object data to be set.
 * @returns {object} Action object with type SET_OBJECT_DATA and payload.
 */
export const setObjectData = (data) => ({
  type: SET_OBJECT_DATA,
  payload: data,
});
