import { useSectionInView } from '../../lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section
      id='projects'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <text ref={ref}>Projects</text>
      <div className='h-[1024px] w-32'></div>
    </section>
  );
};

export default Projects;
