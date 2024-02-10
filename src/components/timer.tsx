import Image from "next/image"

const Timer = () => {
  
  return (
    <div>
      <Image src='/chronometer.png' width={26} height={26} alt="timer"/>
      <div>{}</div>
    </div>
  )
}

export default Timer