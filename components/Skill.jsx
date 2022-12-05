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
                className='flex space-x-5 rounded-md items-center bg-white p-3 w-72'
            >
                <Image src={icon} className='w-24 h-24  filter group-hover:grayscale group-hover:opacity-20 transition duration-300 ease-in-out' height='96' width='96' alt={name}></Image>
                {/* <img
                    src={icon}
                    className='w-24 h-24  filter group-hover:grayscale group-hover:opacity-20 transition duration-300 ease-in-out'
                /> */}
                <p className='text-gray-700 text-2xl font-bold uppercase  group-hover:opacity-20 hidden md:block'>{name}</p>
            </motion.div>

            <div className='absolute rounded-md opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-900 w-full h-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-white opacity-100'>{proficiency}</p>
                </div>
            </div>
        </div>
    )
}