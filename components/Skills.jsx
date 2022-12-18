import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

export default function Skills({ skills }) {

    const { frontend, backend, database, layout, libraries, tools } = skills[0];

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

            className='flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-y-hidden overflow-x-hidden max-w-7xl'>
            {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-[11deg] -mt-24'>

            </div> */}
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-400 font-bold text-3xl'>Skills</h3>

            <h3 className='absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

            <div className='grid grid-cols-3 gap-x-8 gap-y-20 relative w-full top-4 xl:top-0'>
                <div>
                    <div>
                        <h4 className='text-xl font-semibold text-[#F7AB0A] border-b border-[#F7AB0A]'>Front-end</h4>
                    </div>
                    <div className='flex gap-2 relative top-4 flex-wrap'>
                        {
                            frontend.map(skill => <Skill key={skill.name} skill={skill}></Skill>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-xl font-semibold text-[#F7AB0A] border-b border-[#F7AB0A]'>Back-end</h4>
                    </div>
                    <div className='flex gap-2 relative top-4 flex-wrap'>
                        {
                            backend.map(skill => <Skill key={skill.name} skill={skill}></Skill>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-xl font-semibold text-[#F7AB0A] border-b border-[#F7AB0A]'>Database</h4>
                    </div>
                    <div className='flex gap-2 relative top-4 flex-wrap'>
                        {
                            database.map(skill => <Skill key={skill.name} skill={skill}></Skill>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-xl font-semibold text-[#F7AB0A] border-b border-[#F7AB0A]'>Layout</h4>
                    </div>
                    <div className='flex gap-2 relative top-4 flex-wrap'>
                        {
                            layout.map(skill => <Skill key={skill.name} skill={skill}></Skill>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-xl font-semibold text-[#F7AB0A] border-b border-[#F7AB0A]'>Libraries</h4>
                    </div>
                    <div className='flex gap-2 relative top-4 flex-wrap'>
                        {
                            libraries.map(skill => <Skill key={skill.name} skill={skill}></Skill>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-xl font-semibold text-[#F7AB0A] border-b border-[#F7AB0A]'>Supporting tools</h4>
                    </div>
                    <div className='flex gap-2 relative top-4 flex-wrap'>
                        {
                            tools.map(skill => <Skill key={skill.name} skill={skill}></Skill>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}