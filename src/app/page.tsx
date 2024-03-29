'use client';
import CountMines from '@/components/countMines';
import Field from '@/components/field/field';
import LeadersNav from '@/components/leaderslist';
import Restart from '@/components/restart';
import Setting from '@/components/setting/setting';
import Timer from '@/components/timer';

export default function Home() {
  return (
    <>
      <header className="uppercase text-gray-600 text-2xl md:text-4xl font-bold">
        <h1>Minesweeper</h1>
      </header>
      <main className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <Restart />
          <Timer />
          <CountMines />
          <LeadersNav />
          <Setting />
        </div>
        <Field />
      </main>
    </>
  );
}
