'use client'

import Image from 'next/image'
import authorImage from '@/../public/images/authors/azib.png'
import { Button } from './ui/button'

export default function Intro() {
  return (
    <section className='flex flex-col items-center gap-y-4 pb-24 md:flex-row md:items-center md:gap-x-10'>
      <div className='relative md:order-2'>
        <Image
          src={authorImage}
          alt='Azib Iqbal'
          width={150}
          height={150}
          className='h-[215px] w-[215px] rounded-full object-cover shadow-[-8px_8px_0px_rgba(237,247,250,1)] dark:shadow-[-8px_8px_0px_rgba(48,48,48,1)]'
          priority
        />
      </div>
      <div className='mt-2 flex-1 text-center md:order-1 md:mt-0 md:text-left'>
        <h1 className='title no-underline'>Hi there, I&#39;m Azib</h1>
        <p className='mt-3 text-black dark:text-white'>
          I&#39;m a software engineer passionate about AI, machine learning, and
          full-stack development. I love building innovative solutions and
          exploring new technologies.
        </p>
        <Button
          className='mt-5 rounded-sm bg-[#EB4A4A] hover:bg-[#EB4A4A] dark:text-white'
          onClick={() => {
            const link = document.createElement('a')
            link.href = '/resume.pdf'
            link.download = 'Azib_Iqbal_Resume.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
        >
          Download Resume
        </Button>
      </div>
    </section>
  )
}
