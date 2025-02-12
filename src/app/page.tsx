import Intro from '@/components/intro'
import React from 'react'
import RecentProjects from '@/components/recent-projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-screen-lg'>
        <Intro />

        <RecentProjects />

        <Skills />

        {/* <NewsletterForm /> */}
      </div>
    </section>
  )
}
