import { useSectionInView } from '../../lib/hooks';

const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      id='experience'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <text ref={ref}>Experience</text>
      <div className='h-[1024px] w-32'></div>
    </section>
  );
};

export default Experience;
