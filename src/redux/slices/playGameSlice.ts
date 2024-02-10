import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPlayGameSlice {
  isPlay: boolean;
  mines: number;
  level: number;
}

const initialState: IPlayGameSlice = {
  isPlay: false,
  mines: 10,
  level: 1,
};

export const playGameSlice = createSlice({
  name: 'playGame',
  initialState,
  reducers: {
    setIsGame(state, action: PayloadAction<boolean>) {
      state.isPlay = action.payload;
    },
    setMines(state, action: PayloadAction<number>) {
      state.mines = action.payload;
    },
    setLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },
  },
});

export const { setIsGame: setPlayGame, setMines, setLevel } = playGameSlice.actions;

export default playGameSlice.reducer;
