import counterReducer from '../../../../src/store/reducers/counterReducer';
import { INCREMENT, DECREMENT } from '../../../../src/store/actions/counterActions';

describe('counterReducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({ count: 0 });
  });

  it('should handle INCREMENT', () => {
    expect(counterReducer({ count: 0 }, { type: INCREMENT })).toEqual({ count: 1 });
  });

  it('should handle DECREMENT', () => {
    expect(counterReducer({ count: 1 }, { type: DECREMENT })).toEqual({ count: 0 });
  });

  it('should handle multiple INCREMENTs', () => {
    let state = { count: 0 };
    state = counterReducer(state, { type: INCREMENT });
    state = counterReducer(state, { type: INCREMENT });
    expect(state).toEqual({ count: 2 });
  });

  it('should handle multiple DECREMENTs', () => {
    let state = { count: 5 };
    state = counterReducer(state, { type: DECREMENT });
    state = counterReducer(state, { type: DECREMENT });
    expect(state).toEqual({ count: 3 });
  });

  it('should not go below zero if not allowed (or handle as per app logic - current implementation allows it)', () => {
    expect(counterReducer({ count: 0 }, { type: DECREMENT })).toEqual({ count: -1 });
  });
});
