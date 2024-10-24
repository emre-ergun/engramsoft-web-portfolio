import { BsArrowRight } from 'react-icons/bs';
import { useActiveSectionContext } from '../../context/active-section-context';
import { ProfilePicture } from '../../lib/data';
import { useSectionInView } from '../../lib/hooks';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import SectionDivider from '../components/SectionDivider';

export default function Hero() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id='home'
      className='max-w-[64rem] text-center sm:text-start mb-12 scroll-mt-[100rem] h-[calc(100vh-7rem)]'
    >
      <div className='flex flex-col h-full items-center justify-center'>
        <div className='flex flex-col sm:flex-row-reverse h-full items-center justify-center'>
          <div className='flex items-center justify-center h-1/3 w-auto sm:h-auto sm:w-1/2'>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                ref={ref}
                src={ProfilePicture}
                alt='Emre profile illustrate'
                className='h-32 w-32 rounded-full object-cover border-[0.24rem] border-white shadow-xl sm:border-none sm:h-full sm:w-full sm:rounded-none sm:shadow-none'
              />
            </motion.div>
          </div>
          <div className='flex flex-col sm:w-1/2 sm:h-auto w-auto h-2/3'>
            <motion.h1
              className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] md:text-3xl'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span>
                Hello, I'm <span className='font-bold'>Emre</span>.
              </span>{' '}
              I'm a <span className='font-bold'>Senior Software Engineer</span>{' '}
              with <span className='font-bold'>10+ years</span> of experience.
              Building <span className='font-bold'>sites & apps</span> using{' '}
              <span className='font-bold'>React, Next.js & React Native</span>.
            </motion.h1>
            <motion.div
              className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-start px-4 text-lg font-medium'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a
                href='/EmreErgunCV01072024.pdf'
                download
                className='group bg-white px-5 py-1 flex w-1/2 items-center justify-center gap-2 rounded-xl borderBlack outline-none hover:scale-105 active:scale-100  transition dark:bg-white/10 text-nowrap'
              >
                Download CV{' '}
                <HiDownload className='opacity-70 min-w-6 group-hover:opacity-100 group-hover:translate-x-1 transition' />
              </a>
              <a
                href='#contact'
                className='group bg-gray-900 text-white px-5 py-1 flex w-1/2 items-center justify-center gap-2 rounded-xl outline-none hover:scale-105 hover:bg-gray-950 active:scale-100 transition dark:bg-white dark:text-black text-nowrap'
                onClick={() => {
                  setActiveSection('Contact');
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me{' '}
                <BsArrowRight className='opacity-70 min-w-6 group-hover:opacity-100 group-hover:translate-x-1 transition' />
              </a>
            </motion.div>
          </div>
        </div>
        <SectionDivider />
      </div>
    </section>
  );
}
