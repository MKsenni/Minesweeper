import { useAppDispatch } from '@/redux/hooks';
import {
  setCols,
  setLevel,
  setMines,
  setRows,
} from '@/redux/slices/playGameSlice';
import { Levels, Rows, Cols } from '@/types/types';
import React from 'react';

const Button = ({
  name,
  mines,
  level,
  isLevel,
}: {
  name: string;
  mines: number;
  level: number;
  isLevel: boolean;
}) => {
  const dispatch = useAppDispatch();

  const handleLevel = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      dispatch(setMines(mines));
      dispatch(setLevel(level));
      dispatch(setRows(level === Levels.THIRD ? Rows.THIRD : level === Levels.SECOND ? Rows.SECOND : Rows.FIRST));
      dispatch(setCols(level === Levels.THIRD ? Cols.THIRD : level === Levels.SECOND ? Cols.SECOND : Cols.FIRST));
    }
  };

  const styleButton = isLevel
    ? 'py-1 px-2 flex-grow uppercase bg-teal-500 border-2 rounded-md text-white hover:text-gray-500 transition-colors hover:bg-white border-teal-500 hover:border-gray-500'
    : 'py-1 px-2 flex-grow uppercase bg-white border-2 rounded-md text-gray-500 hover:text-white transition-colors hover:bg-teal-500 border-gray-500 hover:border-teal-500';

  return (
    <>
      <button className={styleButton} type="button" onClick={handleLevel}>
        {name}
      </button>
    </>
  );
};

export default Button;
