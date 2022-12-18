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
                {/* <SocialIcon className='cursor-pointer'
                    url='https://drive.google.com/file/d/1GdkNWggyO0Hc8Ik1y1cQ3rgj5Ki2Q1hY/view?usp=share_link'
                    fgColor='gray'
                    bgColor='transparent' /> */}

                <a href='https://drive.google.com/file/d/1GdkNWggyO0Hc8Ik1y1cQ3rgj5Ki2Q1hY/view?usp=share_link' target='_blank' rel='noreferrer' className='uppercase hidden md:inline-flex items-center text-sm text-gray-400 p-2'>
                    <svg class="h-8 w-8 text-gray-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
                    <span>View Resume</span>
                </a>
            </motion.div>
        </header>
    )
}