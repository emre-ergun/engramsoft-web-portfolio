import { projectsData } from '../../lib/data';
import { useSectionInView } from '../../lib/hooks';
import Project from '../components/Project';
import SectionHeader from '../components/SectionHeader';
import React from 'react';

const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section
      id='projects'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <SectionHeader title='My Projects' />
      <div ref={ref} className='flex flex-col'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
