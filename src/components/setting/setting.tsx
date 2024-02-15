'use client';
import { useAppSelector } from '@/redux/hooks';
import Button from './button';
import BigPopup from '@/components/popup';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import InputChange from './inputChange';
import { LevelType, Mines, Levels } from '@/types/types';

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
            <div className="flex flex-col items-center justify-center gap-6">
              <Button
                name={LevelType.LIGHT}
                mines={Mines.FIRST}
                level={Levels.FIRST}
                isLevel={level === Levels.FIRST ? true : false}
              />
              <Button
                name={LevelType.MEDIUM}
                mines={Mines.SECOND}
                level={Levels.SECOND}
                isLevel={level === Levels.SECOND ? true : false}
              />
              <Button
                name={LevelType.HARD}
                mines={Mines.THIRD}
                level={Levels.THIRD}
                isLevel={level === Levels.THIRD ? true : false}
              />
              <InputChange level={Levels.CUSTOM} isLevel={level === Levels.CUSTOM ? true : false} type={LevelType.ROWS} />
              <InputChange level={Levels.CUSTOM} isLevel={level === Levels.CUSTOM ? true : false} type={LevelType.COLS} />
              <InputChange level={Levels.CUSTOM} isLevel={level === Levels.CUSTOM ? true : false} type={LevelType.MINES} />
            </div>
          </BigPopup>,
          document.body
        )}
    </div>
  );
};

export default Setting;
