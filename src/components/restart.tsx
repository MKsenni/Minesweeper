'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Restart = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.refresh()}>
      <Image src='/reload.png' width={26} height={26} alt="restart"/>
    </div>
  )
}

export default Restart