import Button from '@/components/Button/Button';
import Image from 'next/image'
import  Hero from "public/hero.png";
import styles from "./page.module.css"
export default function Home() {
  return (
    <div className="flex items-center gap-10">
      <div className='flex flex-col gap-10'>
        <h1 className='text-6xl font-bold bg-gradient-to-t bg-clip-text text-transparent from-[#c0a8a8] via-[#c0a7a7] to-[#6c5a5a]'>Better design for your digital products.</h1>
        <p>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url={"/portfolio"} text={"See our works"}></Button>
      </div>
      <Image className={`h-[500px] w-full ${styles.image}`} src={Hero}></Image>
    </div>
  )
}