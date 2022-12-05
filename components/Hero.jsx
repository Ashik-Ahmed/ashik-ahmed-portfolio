import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Hero({ about }) {

    const { introPhoto } = about[0];

    const [text, count] = useTypewriter({
        words: ['Hi, This is Ashik', 'A Web Developer </>'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div>
                <Image src={introPhoto} alt='introPhoto' height='128' width='128' className='relative rounded-full mx-auto object-cover'></Image>
            </div>
            {/* <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://avatars.githubusercontent.com/u/30996446?v=4" alt="ashikPicture" /> */}
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl xl:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}