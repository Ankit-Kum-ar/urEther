// walletSlice.js
import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: { userAddress: '', userBalance: null, userAmount: 0 },
  reducers: {
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
    },
    setUserBalance: (state, action) => {
      state.userBalance = action.payload;
    },
    setUserAmount: (state, action) => {
      state.userAmount = action.payload;
    },
  },
});

export const { setUserAddress, setUserBalance, setUserAmount } = walletSlice.actions;
export default walletSlice.reducer;
