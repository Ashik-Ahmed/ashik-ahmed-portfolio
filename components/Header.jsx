import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';


export default function Header({ social_icon }) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center gap-x-2'>
                {/* social icons */}

                {
                    social_icon.map(social => (
                        <>
                            <SocialIcon
                                key={social._id}
                                url={social.link}
                                fgColor='gray'
                                bgColor='transparent'
                                className='border border-gray-700 hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 rounded-md transition duration-300 ease-in-out hover:scale-110' />
                        </>
                    ))
                }
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer border border-gray-700 hover:border-[#F7AB0A]/40 pr-2 rounded-md'>
                <SocialIcon className='cursor-pointer'
                    url='#contact'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent' />
                <a href='#contact' className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</a>
            </motion.div>
        </header>
    )
}