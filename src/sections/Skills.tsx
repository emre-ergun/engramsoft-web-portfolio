import { useSectionInView } from '../../lib/hooks';

const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <div className='h-[1024px] w-32'></div>
      <text ref={ref}>Skills</text>
    </section>
  );
};

export default Skills;
