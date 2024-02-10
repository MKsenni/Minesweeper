import Restart from '@/components/restart';
import Setting from '@/components/setting/setting';

export default function Home() {
  
  return (
    <>
      <header className="uppercase text-gray-600 text-4xl font-bold">
        Mainsweeper
      </header>
      <main>
        <div className="flex flex-wrap items-center justify-between">
          <Restart />
          <Setting />
        </div>
      </main>
    </>
  );
}
