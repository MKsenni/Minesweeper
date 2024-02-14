'use client';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CountMines = () => {
  const mines: number = useAppSelector((state) => state.playGame.mines);
  const flagsCount: number = useAppSelector((state) => state.playGame.flags);

  const [count, setCount] = useState(mines);
  useEffect(() => {
    mines >= flagsCount
      ? setCount(mines - flagsCount)
      : (setCount(0),
        alert('You cannot to set count of flags more then count of mines'));
  }, [mines, flagsCount]);

  return (
    <div className="flex gap-1">
      <Image src="/bomb.png" width={26} height={26} alt="count of bombs" />
      <div>{count}</div>
    </div>
  );
};

export default CountMines;
