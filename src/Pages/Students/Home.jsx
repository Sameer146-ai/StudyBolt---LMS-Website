import React from 'react'
import Hero from '../../components/Student/Hero'
import Companies from '../../components/Student/Companies'
import CoursesSection from '../../components/Student/CoursesSection'
import Testimonial from '../../components/Student/Testimonial'
import CallToAction from '../../components/Student/CallToAction'
import Footer from '../../components/Student/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <Companies/>
      <CoursesSection/>
      <Testimonial/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home