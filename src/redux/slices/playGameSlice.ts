import { openNullCell } from '@/app/utils/openCell';
import { FieldType } from '@/components/field/field';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPlayGameSlice {
  isPlay: boolean;
  mines: number;
  level: number;
  rows: number;
  cols: number;
  field: FieldType;
  flags: number;
  minesLocation: [][];
}

const initialState: IPlayGameSlice = {
  isPlay: false,
  mines: 10,
  level: 1,
  rows: 8,
  cols: 8,
  field: [],
  flags: 0,
  minesLocation: [],
};

export type PayloadType = {
  x: number;
  y: number;
  mark: boolean;
};

export const playGameSlice = createSlice({
  name: 'playGame',
  initialState,
  reducers: {
    setIsPlayGame(state, action: PayloadAction<boolean>) {
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
    setField(state, action: PayloadAction<FieldType>) {
      state.field = action.payload;
    },
    setIsFlag(state, action: PayloadAction<PayloadType>) {
      const { x, y, mark } = action.payload;
      state.field[x][y].flagged = mark;
    },
    setIsOpen(state, action: PayloadAction<PayloadType>) {
      const { x, y, mark } = action.payload;
      if (state.field[x][y].value === 0) {
        openNullCell(x, y, state.field, mark);
      } else {
        state.field[x][y].opened = mark;
      }
    },
    setCountFlags(state, action: PayloadAction<number>) {
      state.flags = state.flags + action.payload;
    },
    setMineslocation(state, action: PayloadAction<[]>) {
      state.minesLocation = action.payload;
    }
  },
});

export const {
  setIsPlayGame,
  setMines,
  setLevel,
  setRows,
  setCols,
  setField,
  setIsFlag,
  setIsOpen,
  setCountFlags,
} = playGameSlice.actions;

export default playGameSlice.reducer;
