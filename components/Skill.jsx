import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Skill({ directionLeft, skill }) {
    const { name, icon, proficiency } = skill;
    return (
        <div className='group relative flex cursor-pointer transition hover:-translate-y-1 hover:scale-110 delay-150 duration-300 ease-in-out'>
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                className='flex flex-col rounded-md items-center w-20 mx-auto  shadow-[0_15px_10px_-15px_rgba(240,240,240,0.3)]'
            >
                <Image src={icon} className='mx-auto filter group-hover:grayscale group-hover:opacity-20 transition duration-300 ease-in-out object-contain' height='42' width='42' alt={name} />
                {/* <img
                    src={icon}
                    className='w-24 h-24  filter group-hover:grayscale group-hover:opacity-20 transition duration-300 ease-in-out'
                /> */}
                <p className='text-white text-sm text-center group-hover:opacity-20 hidden md:block'>{name}</p>
            </motion.div>

            <div className='absolute rounded-md opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-900 w-full h-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-white opacity-100'>{proficiency}</p>
                </div>
            </div>
        </div>
    )
}