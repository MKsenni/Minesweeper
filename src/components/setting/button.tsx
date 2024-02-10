import { useAppDispatch } from '@/redux/hooks';
import { setLevel, setMines } from '@/redux/slices/playGameSlice';
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
    }
  };

  const styleButton = isLevel
    ? 'py-1 w-1/5 flex-grow cursor-pointer uppercase bg-teal-500 border-2 rounded-md text-white hover:text-gray-500 transition-colors hover:bg-white border-teal-500 hover:border-gray-500'
    : 'py-1 w-1/5 flex-grow cursor-pointer uppercase bg-white border-2 rounded-md text-gray-500 hover:text-white transition-colors hover:bg-teal-500 border-gray-500 hover:border-teal-500';

  return (
    <>
      <button className={styleButton} type="button" onClick={handleLevel}>
        {name}
      </button>
    </>
  );
};

export default Button;
