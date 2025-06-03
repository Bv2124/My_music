import { incrementCounter, decrementCounter, INCREMENT, DECREMENT } from '../../../../src/store/actions/counterActions';

describe('counterActions', () => {
  describe('incrementCounter', () => {
    it('should create an action to increment the counter', () => {
      const expectedAction = {
        type: INCREMENT,
      };
      expect(incrementCounter()).toEqual(expectedAction);
    });
  });

  describe('decrementCounter', () => {
    it('should create an action to decrement the counter', () => {
      const expectedAction = {
        type: DECREMENT,
      };
      expect(decrementCounter()).toEqual(expectedAction);
    });
  });
});
