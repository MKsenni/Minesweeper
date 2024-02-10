import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPlayGameSlice {
  isPlay: boolean;
  mines: number;
  level: number;
  rows: number;
  cols: number;
}

const initialState: IPlayGameSlice = {
  isPlay: false,
  mines: 10,
  level: 1,
  rows: 8,
  cols: 8,
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
    setRows(state, action: PayloadAction<number>) {
      state.rows = action.payload;
    },
    setCols(state, action: PayloadAction<number>) {
      state.cols = action.payload;
    },
  },
});

export const {
  setIsGame: setPlayGame,
  setMines,
  setLevel,
  setRows,
  setCols,
} = playGameSlice.actions;

export default playGameSlice.reducer;
