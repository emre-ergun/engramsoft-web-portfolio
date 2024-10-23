import { useSectionInView } from '../../lib/hooks';
import SectionHeader from '../components/SectionHeader';

const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section
      id='projects'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <SectionHeader title='My Projects' />
      <div ref={ref} className='h-[1024px] w-32'></div>
    </section>
  );
};

export default Projects;
