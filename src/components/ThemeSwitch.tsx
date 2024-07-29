import { BsMoon, BsSun } from 'react-icons/bs';
import { useThemeContext } from '../../context/theme-context';


export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] rounded-full bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex justify-center items-center hover:scale-[1.15] active:scale-100 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
