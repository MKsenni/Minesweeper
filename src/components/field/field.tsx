'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Cell from '../cell';
import { createField } from '@/app/utils/createField';
import { useEffect, useState } from 'react';
import { setField } from '@/redux/slices/playGameSlice';
import { CellType } from '@/types/types';

export type FieldType = CellType[][];

const Field = () => {
  const field = useAppSelector((state) => state.playGame.field);
  const curMines: number = useAppSelector((state) => state.playGame.mines);

  const curRows: number = useAppSelector((state) => state.playGame.rows);
  const curCols: number = useAppSelector((state) => state.playGame.cols);

  const dispatch = useAppDispatch();

  const [curField, setCurField] = useState<FieldType>(field);

  useEffect(() => {
    const { field } = createField(curRows, curCols, curMines);
    setCurField(field);
    dispatch(setField(field));
  }, [curCols, curMines, curRows]);

  useEffect(() => {
    setCurField(field);
  }, [field]);

  return (
    <div className="m-auto pb-5">
      {curField &&
        curField.map((row, idxRows) => (
          <div className="flex m-auto" key={idxRows}>
            {row.map((col, idxCols) => (
              <Cell key={idxCols} value={col} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default Field;
