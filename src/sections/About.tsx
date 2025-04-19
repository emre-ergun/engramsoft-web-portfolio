import { useSectionInView } from '../../lib/hooks';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id='about'
      className='mb-28 max-w-[64rem] text-center sm:mb-40 scroll-mt-28 !leading-8 sm:!leading-10'
    >
      <SectionHeader title='About me' />
      <p ref={ref} className='mb-6 text-lg sm:text-xl'>
        I started my journey in low-level programming, developing embedded
        systems with C and C++ for industries like aviation, industrial
        automation, and IoT. Over the past few years, I’ve expanded into modern
        web and mobile development using TypeScript, React, React Native, and
        Next.js — blending my deep understanding of system architecture with the
        agility of full-stack JavaScript ecosystems.
      </p>
      <p className='text-lg mb-6 sm:text-xl'>
        Whether I’m designing real-time tracking systems with BLE and MQTT or
        building responsive UIs and RESTful backends, I bring a problem-solving
        mindset, clean code practices, and a passion for thoughtful
        architecture. I’ve worked across international teams, built CI/CD
        pipelines, and deployed products used in real-world applications — from
        embedded platforms to cloud-hosted web dashboards.
      </p>
      <p className='text-lg sm:text-xl'>
        Now, I’m channeling my experience into creative, user-focused
        applications and looking forward to shaping the next generation of tech
        — one project at a time.
      </p>
    </motion.section>
  );
};

export default About;
