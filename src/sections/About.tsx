import { useSectionInView } from '../../lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <section
      id='about'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <div className='h-[1024px] w-32'></div>
      <text ref={ref}>Hello</text>
    </section>
  );
};

export default About;
