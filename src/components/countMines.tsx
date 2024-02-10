'use client';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CountMines = () => {
  const mines = useAppSelector((state) => state.playGame.mines);
  const [count, setCount] = useState(mines);
  useEffect(() => {
    setCount(mines);
  }, [mines])

  return (
    <div className="flex gap-1">
    <Image src="/bomb.png" width={26} height={26} alt="count of bombs" />
    <div>{count}</div>
  </div>
  )
}

export default CountMines