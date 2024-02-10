import React from 'react';

const Button = ({ name }: { name: string }) => {
  return (
    <>
      <button
        className="py-1 w-1/5 flex-grow cursor-pointer uppercase bg-white border-2 rounded-md text-gray-500 hover:text-white transition-colors hover:bg-teal-500 border-gray-500 hover:border-teal-500"
        type="button"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
