// import { useThemeContext } from '../../context/theme-context';
import { useSectionInView } from '../../lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');
  // const { theme } = useThemeContext();

  return (
    <section
      id='about'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <div className='h-[64rem] w-32'>
        <text className=''>About Me</text>
        {/* {theme === 'dark' ? <text>Dark Mode</text> : <text>Light Mode</text>} */}
      </div>
      <text ref={ref}>Hello</text>
    </section>
  );
};

export default About;
