"use client"

import React from 'react'
import { HeroParallax } from '../ui/HeroPrallax'
import { products } from '@/data'

const Hero = () => {
  return (
    <div className='w-full h-full bg-black'>
        <HeroParallax products={products} />
    </div>
  )
}

export default Hero