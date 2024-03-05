import React from 'react'
import { motion } from 'framer-motion'
//
import { styles } from '../styles'
import { ComputersCanvas, DonutCanvas } from './canvas'
// import { navLinks } from '../constants'
// import { logo, menu, close } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4070f4]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-secondary `}>Hi, I'm <span className='text-[#4070f4]'>Trinh Ngoc Phu</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white  `}>
            I develop Mobile and Web applications.
            <br className='sm:block hidden' />
            I am passionate about software development and look forward to working with you in the future
          </p>
        </div>
      </div>

      <DonutCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px]  h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >

            </motion.div>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero