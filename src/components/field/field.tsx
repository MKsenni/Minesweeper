'use client';
import { useAppSelector } from '@/redux/hooks';
import Cell from '../cell';
import { createField } from '@/app/utils/createField';

const Field = () => {
  const curMines: number = useAppSelector((state) => state.playGame.mines);

  const curRows: number = useAppSelector((state) => state.playGame.rows);
  const curCols: number = useAppSelector((state) => state.playGame.cols);

  const currentField = createField(curRows, curCols, curMines);

  return (
    <div>
      {currentField.map((row, idxRows) => (
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
