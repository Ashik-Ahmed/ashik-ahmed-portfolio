import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

export default function Skills({ skills }) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}

            className='flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-y-hidden overflow-x-hidden'>
            {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-[11deg] -mt-24'>

            </div> */}
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 font-bold text-3xl'>Skills</h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

            <div className='grid grid-cols-4 gap-5 relative top-20'>
                {
                    skills.map(skill => <Skill key={skill._id} skill={skill}></Skill>)
                }
            </div>
        </motion.div>
    )
}