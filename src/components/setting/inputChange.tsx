'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCols, setLevel, setMines, setRows } from '@/redux/slices/playGameSlice';
import { LevelType } from '@/types/types';
import React, { useId, useState } from 'react';

const InputChange = ({ level, isLevel, type }: { level: number, isLevel: boolean, type: LevelType }) => {
  const dispatch = useAppDispatch();
  const inputId = useId();

  const curRows = useAppSelector((state) => state.playGame.rows);
  const curCols = useAppSelector((state) => state.playGame.cols);
  const curMines = useAppSelector((state) => state.playGame.mines);
  const initialState = isLevel ? type === LevelType.ROWS ? curRows : type === LevelType.COLS ? curCols : LevelType.MINES ? curMines : 0 : 0;
  const [value, setValue] = useState(initialState);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      dispatch(setLevel(level));
      setValue(Number(event.target.value));
      switch (type) {
        case LevelType.ROWS:
          dispatch(setRows(Number(event.target.value)));
          break;
        case LevelType.COLS:
          dispatch(setCols(Number(event.target.value)));
          break;
        case LevelType.MINES:
          dispatch(setMines(Number(event.target.value)));
          break;
      }
    }
  };

  return (
    <>
      <label htmlFor={inputId}>
        {type}: {value}
      </label>
      <input
        id={inputId}
        onInput={handleInput}
        className='w-2/5 py-1 flex-grow '
        type="range"
        min={5}
        max={99}
        value={value}
      />
    </>
  );
};

export default InputChange;
