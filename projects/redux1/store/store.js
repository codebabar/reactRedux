import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  name: 'Babar'
};

const rootReducer = (state = initialState, action) => {
  // Your root reducer logic here
  return state;
};

export const store = configureStore({
  reducer: rootReducer
});
