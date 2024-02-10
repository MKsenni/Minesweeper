import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPlayGameSlice {
  isPlay: boolean;
}

const initialState: IPlayGameSlice = {
  isPlay: false,
};

export const playGameSlice = createSlice({
  name: 'playGame',
  initialState,
  reducers: {
    setPlayGame(state, action: PayloadAction<boolean>) {
      state.isPlay = action.payload;
    },
  },
});

export const { setPlayGame } = playGameSlice.actions;

export default playGameSlice.reducer;
