'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LeadersNav = () => {
  const router = useRouter();
  return (
    <div
      className="flex gap-1 cursor-pointer"
      onClick={() => router.push('/leaderslist')}
    >
      <Image src="/podium.png" width={26} height={26} alt="go to leaderslist" />
    </div>
  );
};

export default LeadersNav;
