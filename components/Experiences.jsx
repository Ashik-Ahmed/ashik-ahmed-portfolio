import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';


export default function Experiences({ experiences }) {
    // console.log(experiences)

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
            className='h-screen flex relative flex-col text-left md:flex-row max-w-full p-10 justify-evenly mx-auto items-center overflow-y-hidden'>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-[10deg] -mt-24'>

            </div>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-400 font-bold text-3xl'>Experience</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 pb-28 snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
                {/* <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard /> */}
                {
                    experiences.map(experience => <ExperienceCard key={experience._id} experience={experience}></ExperienceCard>)
                }
            </div>
        </motion.div>
    )
}