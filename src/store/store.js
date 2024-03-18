// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer1';
 // Path to your reducer file

const store = configureStore({
  reducer: reducer
});

export default store;
