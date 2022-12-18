import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About({ about }) {

    const { title, titlePhoto, bio, strengths } = about[0];

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
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center overflow-hidden'>

            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-400 font-bold text-3xl'>About</h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}

                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}

                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56  md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] mt-16 md:mt-0 relative top-36 md:top-20'
            >
                <Image src={titlePhoto} className="rounded-full object-cover md:rounded-lg" alt="" layout='fill'></Image>

            </motion.div>

            <div className='space-y-10 px-0 md:px-10 relative top-60 md:top-12 max-w-7xl'>
                {/* <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4> */}
                <div className='space-y-5'>
                    <h4 className='text-4xl font-semibold'>{title}</h4>
                    <p className='text-base text-left md:text-lg'>{bio}</p>
                </div>
                <hr />
                <div className='max-w-3xl space-y-5 mx-auto text-center'>
                    <h4 className='text-4xl font-semibold'>Why work with me?</h4>


                    <div className='flex justify-center'>
                        <div className='space-y-2'>
                            {
                                strengths.slice(0, (strengths.length / 2)).map((strength, index) => (
                                    <>
                                        <div className='flex items-center justify-end space-x-5'>
                                            < p key={index} className='text-base text-left md:text-xl' > {strength}</p>
                                            <svg className="w-8 h-8 mr-1.5 text-[#F7AB0A]/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </>
                                ))
                            }
                        </div>

                        <div className='space-y-3 ml-5'>
                            {
                                strengths.slice((strengths.length / 2), (strengths.length)).map((strength, index) => (
                                    <>
                                        <div className='items-center'>
                                            <p key={index} className='text-base text-left md:text-xl'>{strength}</p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div >


        </motion.div >
    )
}