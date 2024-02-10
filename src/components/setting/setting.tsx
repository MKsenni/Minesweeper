'use client';
import Button from './button';
import BigPopup from '@/components/popup';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const Setting = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
    <Image src="/settings.png" alt="settings" width={26} height={26} />
    {isOpen &&
      createPortal(
        <BigPopup onClose={(event) => {
          event.stopPropagation();
          setIsOpen(false)}}>
    <div className="flex flex-col items-center justify-center gap-5">
      <Button name={'8 x 8, 10 mine'} />
      <Button name={'16 x 16, 40 mine'} />
      <Button name={'32 x 16, 100 mine'} />
    </div>
        </BigPopup>,
        document.body
      )}
  </div>
  );
};

export default Setting;
