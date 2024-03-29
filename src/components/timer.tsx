'use client';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const isPlay: boolean = useAppSelector((state) => state.playGame.isPlay);
  const isWin: boolean = useAppSelector((state) => state.playGame.isWin);
  const [sec, setSec] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isWin) {
      const winers = JSON.parse(localStorage.getItem('bestTime') || '[]');
      winers.push(sec);
      localStorage.setItem('bestTime', JSON.stringify(winers));
      alert('You are winner !!!');
      if (timer.current) clearInterval(timer.current);
      setTimeout(() => window.location.reload(), 3000);
    }
  }, [isWin]);

  useEffect(() => {
    if (isPlay) {
      timer.current = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    } else {
      if (timer.current) clearInterval(timer.current);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [isPlay]);

  return (
    <div className="flex gap-1">
      <Image src="/chronometer.png" width={26} height={26} alt="timer" />
      <div>{sec}</div>
    </div>
  );
};

export default Timer;
