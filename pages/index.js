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
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About about={about} />
      </section>

      <section id='experience' className='snap-center'>
        {/* <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5
          }}
          className='h-screen flex relative flex-col text-left md:flex-row max-w-full p-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

          <div className='w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 pb-28 snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
             {
              experiences.map((experience: { _id: Key | null | undefined }) => <ExperienceCard key={experience._id} experience={experience}></ExperienceCard>)
            } 


    </div>
        </motion.div >  */}
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
            {/* <img className='w-10 h-10 rounded-full grayscale hover:grayscale-0' src="https://avatars.githubusercontent.com/u/30996446?v=4" alt="" /> */}
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

  const skillsData = await db.collection('skills').find({}).toArray();
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