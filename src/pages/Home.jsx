import React from 'react'
import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
    <Carousel/>
    <MidBanner/>
    <Features/>
    <Footer/>
    </div>
  )
}

export default Home