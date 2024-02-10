'use client';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Timer = () => {
  const isPlay: boolean = useAppSelector((state) => state.playGame.isPlay);
  const [sec, setSec] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (isPlay) {
      setTimer(
        setInterval(() => {
          setSec((prev) => prev + 1);
        }, 1000)
      );
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay])

  return (
    <div className="flex gap-1">
      <Image src="/chronometer.png" width={26} height={26} alt="timer" />
      <div>{sec}</div>
    </div>
  );
};

export default Timer;
