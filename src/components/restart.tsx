'use client';
import Image from "next/image";

const Restart = () => {

  return (
    <div className="cursor-pointer" onClick={() => window.location.reload()}>
      <Image src='/reload.png' width={26} height={26} alt="restart"/>
    </div>
  )
}

export default Restart