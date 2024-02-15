'use client';
// import { openCell } from '@/app/utils/openCell';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  setCountFlags,
  setField,
  setIsFlag,
  setIsOpen,
  setIsPlayGame,
} from '@/redux/slices/playGameSlice';
import { FieldType } from './field/field';
import { useEffect, useState } from 'react';

export type ValueType = string | number;

export type CellType = {
  value: ValueType;
  x: number;
  y: number;
  opened: boolean;
  flagged: boolean;
};

const Cell = ({ value }: { value: CellType }) => {
  const dispatch = useAppDispatch();
  const mines: number = useAppSelector((state) => state.playGame.mines);
  const flagsCount: number = useAppSelector((state) => state.playGame.flags);
  const field = useAppSelector((state) => state.playGame.field);
  const [curField, setCurField] = useState<FieldType>(field);
  useEffect(() => {
    setCurField(field);
  }, [field])

  const textColor =
    value.opened && value.value === 1
      ? 'text-blue-400'
      : value.opened && value.value === 2
        ? 'text-green-800'
        : value.opened && value.value === 3
          ? 'text-red-800'
          : value.opened && value.value === 4
            ? 'text-blue-900'
            : value.opened && value.value === 5
              ? 'text-orange-900'
              : value.opened && value.value === 6
                ? 'text-emerald-600'
                : value.opened && value.value === 7
                  ? 'text-black'
                  : value.opened && value.value === 8
                    ? 'text-white'
                    : 'text-teal-300';

  const bgColor =
    value.opened && value.value !== 0
      ? value.value === 'X'
        ? 'bg-red-600'
        : 'bg-white'
      : value.opened && value.value === 0
        ? 'bg-slate-200'
        : 'bg-teal-300';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      // const arrofOpenCells = openCell(curField, value);
      // arrofOpenCells?.forEach((cell) => dispatch(setIsOpen({ x: cell.x, y: cell.y, mark: true })))
      // console.log(openCellsNull);
      
      // dispatch(setField(openCellsNull));
      dispatch(setIsPlayGame(true));
      dispatch(setIsOpen({ x: value.x, y: value.y, mark: true }));
      if (value.value === 'X') {
        alert("Clicked on mine, try again!");
        dispatch(setIsPlayGame(false));
      }
    }
  };

  const handleClickFlagged = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event) {
      if (!value.flagged && !value.opened && flagsCount < mines) {
        dispatch(setIsPlayGame(true));
        dispatch(setIsFlag({ x: value.x, y: value.y, mark: true }));
        dispatch(setCountFlags(1));
      } else if (value.flagged && flagsCount > 0) {
        dispatch(setCountFlags(-1));
        dispatch(setIsFlag({ x: value.x, y: value.y, mark: false }));
      }
    }
  };

  return (
    <button type='button'
      className={
        textColor +
        ' ' +
        bgColor +
        ' w-[18px] h-[18px] min-[375px]:w-[22px] min-[375px]:h-[22px] sm:w-8 sm:h-8 md:w-10 md:h-10 border-2 rounded-md text-center'
      }
      onClick={handleClick}
      onContextMenu={handleClickFlagged}
    >
      {!value.opened && value.flagged
        ? '🚩'
        : value.opened && value.value !== 0
          ? value.value === 'X'
            ? '💣'
            : value.value
          : value.value}
    </button>
  );
};

export default Cell;
