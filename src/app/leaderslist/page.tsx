'use client';
import { useRouter } from 'next/navigation';

const Leaderslist = () => {
  const router = useRouter();
  const back = () => router.back();

  // const winnersLS: string[] | [] = JSON.parse(
  //   localStorage.getItem('bestTime') || '[]'
  // );
  const winnersLS: [] = [];
  const tenWinners = winnersLS.slice(0, 10);
  let mapped = tenWinners.map((item, idx) => {
    return { index: idx, winner: item };
  });
  mapped.sort((a, b) => {
    if (a.winner > b.winner) {
      return 1;
    }
    if (a.winner < b.winner) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="flex flex-col items-center">
      <h2 className="uppercase text-gray-600 text-4xl font-bold">
        leaders list
      </h2>
      <button
        onClick={back}
        className="mt-5 mr-5 border-2 px-3 py-1 rounded-md bg-white transition-colors border-teal-500 hover:bg-teal-500 text-teal-500 hover:text-white"
      >
        back
      </button>
      <div className="grid grid-cols-2">
        {mapped.map((winner) => (
          <>
            <div
              className="py-1 px-2 rounded-md border-teal-500"
              key={winner.index}
            >
              {winner.index}
            </div>
            <div
              className="py-1 px-2 rounded-md border-teal-500"
              key={winner.index}
            >
              {winner.winner}
            </div>
          </>
        ))}
      </div>
      {/* <table className="mt-5 text-center text-lg text-gray-500 rounded-md border-2 border-teal-500">
        <tr>
          <td className="py-1 px-2 rounded-md border-teal-500">PLACE</td>
          <td className="py-1 px-2 rounded-md border-teal-500">TIME,sec</td>
        </tr>
        {winners.map((winner: string, idx: number) => (
          <tr key={idx}>
            <td className="py-1 px-2 rounded-md border-teal-500">{idx}</td>
            <td className="py-1 px-2 rounded-md border-teal-500">{winner}</td>
          </tr>
        ))} */}
      {/* <tr className="row">
          <td>1</td>
          <td>{winers[0]}</td>
        </tr>
        <tr className="row">
          <td>2</td>
          <td>{winers[1]}</td>
        </tr>
        <tr className="row">
          <td>3</td>
          <td>{winers[2]}</td>
        </tr>
        <tr className="row">
          <td>4</td>
          <td>{winers[3]}</td>
        </tr>
        <tr className="row">
          <td>5</td>
          <td>{winers[4]}</td>
        </tr>
        <tr className="row">
          <td>6</td>
          <td>{winers[5]}</td>
        </tr>
        <tr className="row">
          <td>7</td>
          <td>{winers[6]}</td>
        </tr>
        <tr className="row">
          <td>8</td>
          <td>{winers[7]}</td>
        </tr>
        <tr className="row">
          <td>9</td>
          <td>{winers[8]}</td>
        </tr>
        <tr className="row">
          <td>10</td>
          <td>{winers[9]}</td>
        </tr> */}
      {/* </table> */}
    </div>
  );
};

export default Leaderslist;
