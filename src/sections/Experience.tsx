import { useSectionInView } from '../../lib/hooks';
import SectionHeader from '../components/SectionHeader';

const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      id='experience'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <SectionHeader title='My Experience' />
      <div ref={ref} className='h-[1024px] w-32'></div>
    </section>
  );
};

export default Experience;
