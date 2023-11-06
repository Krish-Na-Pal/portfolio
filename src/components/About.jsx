import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services} from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          onCompositionStart={{
            max: 45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Inroduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[16px] max-w-6xl leading-[30px]'
      >
        As a student, I am pursuing a degree in computer engineering at Sarvajanik College of Engineering and Technology(SCET), which involves the design, development, and maintenance of computer systems. My skills include proficiency in programming languages such as Python, Java, C++, and more, enabling me to develop software applications and work on various software-related projects. I also have a good understanding of computer hardware, encompassing knowledge of processors, memory, storage devices, and computer architecture. With this skill set, I am well-prepared for a wide range of career opportunities in software development, system administration, network engineering, and hardware design within the tech industry. My ability to adapt and learn continuously is crucial in this dynamic field.
        <br></br>
        I'm looking for an internship currently, if you see me as a good fit, check my <a href='https://drive.google.com/file/d/1Lridvb206OPUSnnfBdupz-mW5Tyu2kCL/view?usp=drivesdk' className='text-white text-[20px] font-bold font-underline'>Resume</a> and I'd love to work for you.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About,"about")