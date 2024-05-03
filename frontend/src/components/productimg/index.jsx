import Image from 'next/image'
 
export default function Photo({ src }) {
  return (
    <Image
      src={src}
      width={200}
      height={200}
      alt="Picture of the author"
    />
  )
}