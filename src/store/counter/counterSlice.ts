// shortcut to create a slice - rxslice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 10,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    addOne(state) {
      state.count += 1;
    },
    subtractOne(state) {
      if (state.count === 0) return;
      state.count -= 1;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

export const { initCounterState, addOne, subtractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
