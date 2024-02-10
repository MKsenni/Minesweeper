'use client';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Timer = () => {
  const isPlay: boolean = useAppSelector((state) => state.playGame.isPlay);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlay) {
        timer = setInterval(() => {
          setSec((prev) => prev + 1);
        }, 1000)
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlay])

  return (
    <div className="flex gap-1">
      <Image src="/chronometer.png" width={26} height={26} alt="timer" />
      <div>{sec}</div>
    </div>
  );
};

export default Timer;
