const Cell = ({ value }: { value: number | string }) => {
  return (
    <div className="w-10 h-10 border-2 bg-teal-200 cursor-pointer rounded-md">
      {value}
    </div>
  );
};

export default Cell;
