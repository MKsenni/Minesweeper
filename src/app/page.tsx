import Restart from '@/components/restart';
import Setting from '@/components/setting/setting';
import Timer from '@/components/timer';

export default function Home() {
  return (
    <>
      <header className="uppercase text-gray-600 text-4xl font-bold">
        Mainsweeper
      </header>
      <main>
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <Restart />
          <Timer />
          <Setting />
        </div>
      </main>
    </>
  );
}
