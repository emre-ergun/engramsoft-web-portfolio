import { skillsData } from '../../lib/data';
import { useSectionInView } from '../../lib/hooks';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      className='mb-28 max-w-[50rem] text-center sm:mb-40 scroll-mt-28'
    >
      <SectionHeader title='My Skills' />
      <ul
        ref={ref}
        className='flex flex-wrap justify-center gap-3 text-lg text-gray-800'
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
