import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Experiences from '../components/Experiences'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'


export default function Home({ social_icon, about, experiences, skills, projects }) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{`Ashik's Portfolio`}</title>
      </Head>

      <Header social_icon={social_icon} />

      <section id='hero' className='snap-start'>
        <Hero about={about} />
      </section>

      <section id='about' className='snap-center'>
        <About about={about} />
      </section>

      <section id='experience' className='snap-center'>

        <Experiences experiences={experiences} />
      </section >

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-4 w-fit mx-auto cursor-pointer'>
          <div className='flex items-center justify-center'>
            <p className='text-gray-400'>Back to Top</p>
          </div>
        </footer>
      </Link>

    </div >
  )
}

export async function getServerSideProps(context) {

  const client = await clientPromise

  const db = await client.db('ashik-portfolio');

  const socialData = await db.collection('social_icon').find({}).toArray();
  const social_icon = JSON.parse(JSON.stringify(socialData));

  const aboutData = await db.collection('about').find({}).toArray();
  const about = JSON.parse(JSON.stringify(aboutData));

  const data = await db.collection('experience').find({}).toArray();
  const experiences = JSON.parse(JSON.stringify(data));

  // const skillsData = await db.collection('skills').find({}).toArray();
  // const skills = JSON.parse(JSON.stringify(skillsData));

  const skillsData = await db.collection('skillset').find({}).toArray();
  const skills = JSON.parse(JSON.stringify(skillsData));

  const projectsData = await db.collection('projects').find({}).toArray();
  const projects = JSON.parse(JSON.stringify(projectsData)).reverse();

  return {
    props: {
      social_icon,
      about,
      experiences,
      skills,
      projects
    },
  }

}