import Image from "next/image";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full'>
        <Image src="/main-bg.webp" alt="Gambar latar belakang" layout="fill" objectFit="cover" />
      </div>
    </main>      
  );
}