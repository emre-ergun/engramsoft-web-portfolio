import { useSectionInView } from '../../lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section
      id='projects'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <div className='h-[1024px] w-32'></div>
      <text ref={ref}>Projects</text>
    </section>
  );
};

export default Projects;
