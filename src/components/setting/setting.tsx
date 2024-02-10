'use client';
import { useAppSelector } from '@/redux/hooks';
import Button from './button';
import BigPopup from '@/components/popup';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Setting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const curLevel = useAppSelector((state) => state.playGame.level);
  const [level, setLevel] = useState(curLevel);

  useEffect(() => {
    setLevel(curLevel);
  }, [curLevel]);

  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
      <Image src="/settings.png" alt="settings" width={26} height={26} />
      {isOpen &&
        createPortal(
          <BigPopup
            onClose={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <Button
                name={'8 x 8, 10 mine'}
                mines={10}
                level={1}
                isLevel={level === 1 ? true : false}
              />
              <Button
                name={'16 x 16, 40 mine'}
                mines={40}
                level={2}
                isLevel={level === 2 ? true : false}
              />
              <Button
                name={'32 x 16, 100 mine'}
                mines={100}
                level={3}
                isLevel={level === 3 ? true : false}
              />
            </div>
          </BigPopup>,
          document.body
        )}
    </div>
  );
};

export default Setting;
