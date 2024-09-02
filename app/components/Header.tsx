import React from 'react'
import Image from 'next/image'
import photo from '@/public/images/Image2portfolio.jpeg'
export default function Header() {
  return (
    <header className='flex justify-center items-center gap-4 p-4'>
        <h1 className='text-2xl text-cente'>YOBA SABO</h1>
        <Image src={photo} alt='photo de yoba sabo' width={100} height={100} className='w-[100px] h-[100px] rounded-full'/>
    </header>
  )
}
