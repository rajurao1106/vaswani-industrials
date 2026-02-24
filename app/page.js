import About from '@/components/homepage/About'
import CTA from '@/components/homepage/CTA'
import Hero from '@/components/homepage/Hero'
import NewsMedia from '@/components/homepage/NewsMedia'
import OurProducts from '@/components/homepage/OurProducts'
import Stats from '@/components/homepage/Stats'
import WordFromCeo from '@/components/homepage/WordFromCeo'
import React from 'react'

export default function page() {
  return (
    <main>
      <Hero/>
      <Stats/>
      <About/>
      <WordFromCeo/>
      <OurProducts/>
      <NewsMedia/>
      <CTA/>
    </main>
  )
}
