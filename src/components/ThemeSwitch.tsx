import { BsMoon, BsSun } from 'react-icons/bs';
import { useThemeContext } from '../../context/theme-context';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className='fixed bottom-5 right-5 flex flex-col gap-2'>
      <a
        href='https://www.github.com/emre-ergun'
        target='_blank'
        className='w-[3rem] h-[3rem] rounded-full bg-[rgba(174,173,230,0.2)] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex justify-center items-center hover:scale-[1.15] active:scale-100 transition-all duration-500 dark:bg-[rgba(121,55,102,0.5)] '
      >
        {<FaGithub />}
      </a>
      <a
        href='https://www.linkedin.com/in/ergunemre'
        target='_blank'
        className='w-[3rem] h-[3rem] rounded-full bg-[rgba(174,173,230,0.2)] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex justify-center items-center hover:scale-[1.15] active:scale-100 transition-all duration-500 dark:bg-[rgba(121,55,102,0.5)] '
      >
        {<FaLinkedin />}
      </a>
      <button
        className='w-[3rem] h-[3rem] rounded-full bg-[rgba(174,173,230,0.2)] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex justify-center items-center hover:scale-[1.15] active:scale-100 transition-all duration-500 dark:bg-[rgba(121,55,102,0.5)] '
        onClick={toggleTheme}
      >
        {theme === 'light' ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}
