import React from 'react'


import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from 'framer-motion'

import { Tilt } from 'react-tilt'
//
import { styles } from '../styles'

import { fadeIn, textVariant } from '../utils/motion'





const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full p-[5px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 10000

          }}
          className='bg-tertiary rounded-[10px] py-5 px-12 min-h-[120px] flex justify-evenly items-center'
        >
          <img src={icon} alt={name} className='w-14 h-14 object-contain' />
          <p className='text-white text-[18px] font-bold text-center'> {name}</p>

        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Overview</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className='flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'skill')