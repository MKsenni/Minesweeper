'use client';
import { useAppDispatch } from '@/redux/hooks';
import { setCols, setMines, setRows } from '@/redux/slices/playGameSlice';
import React, { useId, useState } from 'react';

export enum InputType {
  ROWS = 'rows',
  COLS = 'cols',
  MINES = 'mines',
}

const InputChange = ({ type }: { type: InputType }) => {
  const dispatch = useAppDispatch();
  const inputId = useId();
  const [value, setValue] = useState(0);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      setValue(Number(event.target.value));
      switch (type) {
        case InputType.ROWS:
          dispatch(setRows(Number(event.target.value)));
          break;
        case InputType.COLS:
          dispatch(setCols(Number(event.target.value)));
          break;
        case InputType.MINES:
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
        className="w-2/5 rounded-md border-2"
        type="range"
        placeholder="10"
        min={10}
        max={99}
        value={value}
      />
    </>
  );
};

export default InputChange;
