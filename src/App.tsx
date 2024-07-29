import React from 'react';
import Header from './components/Header';
import ActiveSectionContextProvider from '../context/active-section-context';
import ThemeContextProvider from '../context/theme-context';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <React.Fragment>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>
    </React.Fragment>
  );
}

export default App;
