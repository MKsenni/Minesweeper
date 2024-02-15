'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Leaderslist = () => {
  const router = useRouter();
  const [winnersLS, setWinnersLS] = useState<string[] | []>();

  useEffect(() => {
    let value: string[] | [] = JSON.parse(
      localStorage.getItem('bestTime') || '[]'
    );
    setWinnersLS(value)
  }, [])

  let mapped = winnersLS && winnersLS.map((item, idx) => {
    return { index: idx, winer: item };
  });
  mapped && mapped.sort((a, b) => {
    if (a.winer > b.winer) {
      return 1;
    }
    if (a.winer < b.winer) {
      return -1;
    }
    return 0;
  });
  const tenWinners = mapped && mapped.slice(0, 10);

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="uppercase text-gray-600 text-4xl font-bold">
        leaders list
      </h2>
      <button
        onClick={() => router.push('/')}
        className="mr-5 border-2 px-3 py-1 rounded-md bg-white transition-colors border-teal-500 hover:bg-teal-500 text-teal-500 hover:text-white"
      >
        back
      </button>
      <div className="flex flex-col">
        {tenWinners && tenWinners.map((winer, idx) => (
          <div className='flex gap-7' key={idx}>
            <div
              className="py-1 rounded-md border-teal-500 flex-grow"
            >
              {winer.index + 1} game
            </div>
            <div
              className="py-1 rounded-md border-teal-500 flex-grow"
            >
              {winer.winer} second
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderslist;
