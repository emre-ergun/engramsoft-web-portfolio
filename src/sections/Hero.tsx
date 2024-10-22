import { BsArrowRight } from 'react-icons/bs';
// import { BsLinkedin } from 'react-icons/bs';
import { useActiveSectionContext } from '../../context/active-section-context';
import { testPicture } from '../../lib/data';
import { useSectionInView } from '../../lib/hooks';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
// import { FaGithubSquare } from 'react-icons/fa';

export default function Hero() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-[100rem]'
    >
      <div className='flex flex-col sm:flex-row-reverse'>
        <div className='flex items-center justify-center mb-12 sm:mb-0 sm:w-1/2'>
          <div className='relative'>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'tween', duration: 0.2 }}
            >
              <img
                ref={ref}
                src={testPicture}
                alt='Emre portrait'
                className='h-32 w-32 rounded-full object-cover border-[0.24rem] border-white shadow-xl sm:border-none sm:h-full sm:w-full sm:rounded-none sm:shadow-none'
              />
            </motion.div>
          </div>
        </div>
        <div className='flex flex-col sm:w-1/2'>
          <motion.h1
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] md:text-3xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span>Hello, I'm Emre.</span> I'm a{' '}
            <span className='font-bold'>Senior Software Engineer</span> with{' '}
            <span className='font-bold'>11 years</span> of experience. Building{' '}
            <span className='font-bold'>sites & apps</span> using
            <br />
            <span className='font-bold'>React, Next.js & React Native</span>.
          </motion.h1>
          <motion.div
            className='flex flex-col gap-2 items-center justify-center px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className='flex flex-col sm:flex-row gap-2'>
              <a
                href='/CV.pdf'
                download
                className='group bg-white px-5 py-1 flex items-center justify-around gap-2 rounded-xl borderBlack outline-none hover:scale-105 active:scale-100  transition dark:bg-white/10'
              >
                Download CV{' '}
                <HiDownload className='opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition' />
              </a>
              <a
                href='#contact'
                className='group bg-gray-900 text-white px-5 py-1 flex items-center justify-around gap-2 rounded-xl outline-none hover:scale-105 hover:bg-gray-950 active:scale-100 transition dark:bg-white dark:text-black'
                onClick={() => {
                  setActiveSection('Contact');
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me{' '}
                <BsArrowRight className='opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition' />
              </a>
            </div>
            {/* <div className='flex gap-2'>
              <a
                href='https://linkedin.com/in/emrergun'
                target='_blank'
                className='bg-white p-2 text-gray-700 flex items-center gap-2 rounded-xl borderBlack outline-none hover:scale-105 hover:text-gray-950 active:scale-100 transition dark:bg-white/10 dark:text-white/80'
              >
                <BsLinkedin />
              </a>
              <a
                href='https://github.com/emre-ergun'
                target='_blank'
                className='bg-white p-2 text-gray-700 flex items-center gap-2 rounded-xl borderBlack outline-none hover:scale-105 hover:text-gray-950 active:scale-100 transition dark:bg-white/10 dark:text-white/80'
              >
                <FaGithubSquare />
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
