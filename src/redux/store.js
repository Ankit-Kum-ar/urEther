// store.js
import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice.js';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
