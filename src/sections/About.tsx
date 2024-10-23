import { useSectionInView } from '../../lib/hooks';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      id='about'
      className='mb-28 max-w-[44rem] text-center sm:mb-40 scroll-mt-28 !leading-8'
    >
      <SectionHeader title='About me' />
      <p className='mb-3 text-lg'>
        After <span className='font-semibold'>10+ years</span> of working on
        low-level software development, I have moved into web application
        development, focusing on{' '}
        <span className='font-semibold'>modern frameworks</span> like{' '}
        <span className='font-semibold'>React, React Native, and Next.js</span>.
        My experience with embedded systems and industrial automation gave me
        strong problem-solving skills and a good understanding of software
        architecture. Now, I am applying these skills to create{' '}
        <span className='font-semibold'>dynamic and responsive</span> web
        applications that deliver a great user experience.
      </p>
      <p ref={ref} className='text-lg'>
        Learning web technologies has allowed me to{' '}
        <span className='font-semibold'>develop applications</span> that are
        both <span className='font-semibold'>functional and user-friendly</span>
        . I focus on building{' '}
        <span className='font-semibold'>web and mobile solutions</span> using{' '}
        <span className='font-semibold'>React and React Native</span>, while
        also exploring{' '}
        <span className='font-semibold'>server-side rendering</span> with{' '}
        <span className='font-semibold'>Next.js</span>. My background helps me
        bring a unique perspective to web development, enabling me to design
        efficient and well-structured applications.
      </p>
    </motion.section>
  );
};

export default About;
