import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExperienceCard({ experience }) {

    const { role, company, companyLogo, companyInfo, tech, start, end, responsibilities, } = experience;

    return (
        <article className='flex flex-col rounded-lg space-y-3 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#505050] md:px-10 py-3  cursor-pointer transition-opacity duration-200 relative top-20'>
            <div className='flex'>
                <motion.div
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    className='w-24 h-24 xl:w-[140px] xl:h-[140px]  border-2'
                >
                    <Image src={companyLogo} alt={company} height='90' width='90' layout='responsive' className='object-fill object-center'></Image>
                </motion.div>

                <div className='px-2 md:px-10'>
                    <h4 className='text-xl md:text-4xl font-light'>{role}</h4>
                    <p className='font-bold text-lg md:text-2xl mt-1'>{company} <span className='text-sm italic font-normal'>( {new Date(start).toISOString().split('T')[0]} - {end ? new Date(end).toISOString().split('T')[0] : 'Continue'} )</span></p>
                    <div className='flex space-x-2 my-2'>
                        {
                            tech?.map((technology, index) => (
                                <>
                                    <Image key={index} src={technology} height='40' width='40' className='w-10 h-10' alt=""></Image>
                                </>
                            ))
                        }
                    </div>
                    {/* <div>
                        <p className='text-gray-300'><span className='font-bold'>Started :</span> {new Date(start).toISOString().split('T')[0]}</p>
                        <p className='text-gray-300'><span className='font-bold'>Ended :</span> {end ? new Date(end).toISOString().split('T')[0] : 'Continue'}</p>
                    </div> */}
                </div>
            </div>
            <div>
                <p><span className='font-bold'>About:</span> <span className='italic'>{companyInfo}</span></p>
            </div>
            <div>
                <h4 className='text-left text-xl font-semibold underline decoration-[#F7AB0A]/50 py-3'>Key Responsibilities:</h4>
                <ul className='list-disc space-y-1 ml-5 text-lg'>
                    {
                        responsibilities.map((resp, index) => (
                            <li key={index} className='flex md:items-center'>
                                <svg className="w-4 h-4 mr-1.5 text-[#F7AB0A]/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>

                                {resp}

                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}