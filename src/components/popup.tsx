import { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

type BigPopupProps = {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const BigPopup = ({ onClose, children }: BigPopupProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
        <div className="relative flex flex-col justify-center w-4/5 h-4/5 p-5 overflow-y-auto bg-white border border-gray-300 rounded-md">
          {children}
          <button
            type="button"
            className="absolute right-2 top-2"
            onClick={onClose}
          >
            {<FaTimes style={{ color: '#276339' }} title="Exit" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default BigPopup;
