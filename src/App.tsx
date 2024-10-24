import ActiveSectionContextProvider from '../context/active-section-context';
import ThemeContextProvider from '../context/theme-context';
import ThemeSwitch from './components/ThemeSwitch';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <main className='flex flex-col items-center px-4'>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </ActiveSectionContextProvider>
      <ThemeSwitch />
    </ThemeContextProvider>
  );
}

export default App;
