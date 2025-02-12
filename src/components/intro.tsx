import Image from 'next/image'
import authorImage from '@/../public/images/authors/azib.jpg'

export default function Intro() {
  return (
    <section className='flex items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hi there, I&#39;m Azib 👋</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer passionate about AI, machine learning, and
          full-stack development. I love building innovative solutions and
          exploring new technologies.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Azib Iqbal'
          width={150}
          height={150}
          priority
        />
      </div>
    </section>
  )
}
