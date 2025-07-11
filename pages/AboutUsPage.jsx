import AboutSection from '@/components/about/AboutSection'
import ExperienceSection from '@/components/about/ExperienceSection'
import GallarySection from '@/components/about/GallarySection'
import WhatWeDoSection from '@/components/about/WhatWeDoSection'
import WhoWeAreSection from '@/components/about/WhoWeAreSection'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div className='max-w-[1400px] w-full mx-auto '>
        <AboutSection/>
        <WhoWeAreSection/>
        <WhatWeDoSection/>
        <ExperienceSection/>
        <GallarySection/>
    </div>
  )
}

export default AboutUsPage