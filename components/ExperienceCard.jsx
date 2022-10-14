import React from 'react';
import { motion } from 'framer-motion';
import { MdLogout } from 'react-icons/md';

export default function ExperienceCard({ experience }) {
    const { role, company, companyLogo, tech, start, end, responsibilities, } = experience;
    return (
        <article className='flex flex-col rounded-lg space-y-3 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#505050] md:px-10 py-3  cursor-pointer transition-opacity duration-200 relative top-20'>
            <div className='flex'>
                <motion.img
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
                    className='w-32 h-32 p-2 xl:w-[200px] xl:h-[200px] object-fill object-center border-2 bg-white'
                    src={companyLogo} alt="" />

                <div className='px-0 md:px-10'>
                    <h4 className='text-xl md:text-4xl font-light'>{role}</h4>
                    <p className='font-bold text-lg md:text-2xl mt-1'>{company}</p>
                    <div className='flex space-x-2 my-2'>
                        {
                            tech?.map((technology, index) => (
                                <>
                                    <img key={index} className='w-10 h-10' src={technology} alt="" />
                                </>
                            ))
                        }
                        {/* <img className='w-10 h-10 rounded-full' src="https://ashik-ahmed.netlify.app/static/media/vscode.a2ea685afa8a93556564.png" alt="" />
                        <img className='w-10 h-10 rounded-full' src="https://ashik-ahmed.netlify.app/static/media/vscode.a2ea685afa8a93556564.png" alt="" />
                        <img className='w-10 h-10 rounded-full' src="https://ashik-ahmed.netlify.app/static/media/vscode.a2ea685afa8a93556564.png" alt="" /> */}
                    </div>
                    <div>
                        <p className='text-gray-300'><span className='font-bold'>Started :</span> {new Date(start).toISOString().split('T')[0]}</p>
                        <p className='text-gray-300'><span className='font-bold'>Ended :</span> {end ? new Date(end).toISOString().split('T')[0] : 'Continue'}</p>
                    </div>
                </div>
            </div>
            <div>
                <h4 className='text-left text-xl font-semibold underline decoration-[#F7AB0A]/50 py-3'>Key Responsibilities:</h4>
                <ul className='list-disc space-y-1 ml-5 text-lg'>
                    {
                        responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}