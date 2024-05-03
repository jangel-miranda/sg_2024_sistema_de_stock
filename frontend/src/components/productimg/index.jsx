import Image from 'next/image'
 
export default function Photo() {
  return (
    <Image
      src="/profile.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}