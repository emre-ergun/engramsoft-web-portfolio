import ActiveSectionContextProvider from '../context/active-section-context';
import ThemeContextProvider from '../context/theme-context';
import ThemeSwitch from './components/ThemeSwitch';
import Header from './components/Header';
import Hero from './sections/Hero';

function App() {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <main className='flex flex-col items-center px-4'>
          <Header />
          <Hero />
        </main>
      </ActiveSectionContextProvider>
      <ThemeSwitch />
    </ThemeContextProvider>
  );
}

export default App;
