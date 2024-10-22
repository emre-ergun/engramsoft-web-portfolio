import { useSectionInView } from '../../lib/hooks';

const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      id='experience'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <div className='h-[1024px] w-32'></div>
      <text ref={ref}>Experience</text>
    </section>
  );
};

export default Experience;
