import { useSectionInView } from '../../lib/hooks';
import SectionHeader from '../components/SectionHeader';

const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      className='mb-28 max-w-[50rem] text-center sm:mb-40 scroll-mt-28'
    >
      <SectionHeader title='Skills' />
      <div ref={ref} className='h-[1024px] w-32'></div>
    </section>
  );
};

export default Skills;
