import {
  setStringData,
  setObjectData,
  SET_STRING_DATA,
  SET_OBJECT_DATA,
} from '../../../../src/store/actions/dataActions';

describe('dataActions', () => {
  describe('setStringData', () => {
    it('should create an action to set the string data', () => {
      const text = 'Hello World';
      const expectedAction = {
        type: SET_STRING_DATA,
        payload: text,
      };
      expect(setStringData(text)).toEqual(expectedAction);
    });

    it('should create an action with an empty string payload', () => {
      const text = '';
      const expectedAction = {
        type: SET_STRING_DATA,
        payload: text,
      };
      expect(setStringData(text)).toEqual(expectedAction);
    });
  });

  describe('setObjectData', () => {
    it('should create an action to set the object data', () => {
      const data = { key: 'value', number: 123 };
      const expectedAction = {
        type: SET_OBJECT_DATA,
        payload: data,
      };
      expect(setObjectData(data)).toEqual(expectedAction);
    });

    it('should create an action with an empty object payload', () => {
      const data = {};
      const expectedAction = {
        type: SET_OBJECT_DATA,
        payload: data,
      };
      expect(setObjectData(data)).toEqual(expectedAction);
    });

    it('should create an action with a complex object payload', () => {
      const data = { user: { name: 'Test', id: 1 }, settings: { theme: 'dark' } };
      const expectedAction = {
        type: SET_OBJECT_DATA,
        payload: data,
      };
      expect(setObjectData(data)).toEqual(expectedAction);
    });
  });
});
