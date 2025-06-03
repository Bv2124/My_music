// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creators
export const incrementCounter = () => ({
  type: INCREMENT,
});

export const decrementCounter = () => ({
  type: DECREMENT,
});
