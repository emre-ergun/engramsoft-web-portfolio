import React from 'react';
import Header from './components/Header';
import ActiveSectionContextProvider from '../context/active-section-context';

function App() {
  return (
    <React.Fragment>
      <ActiveSectionContextProvider>
        <Header />
      </ActiveSectionContextProvider>
    </React.Fragment>
  );
}

export default App;
