import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import HeroBg from './components/HeroBg.tsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroBg />
    <App />
    <Toaster
      position='top-right'
      containerStyle={{
        top: 80,
        right: 10,
      }}
      toastOptions={{
        className:
          'bg-[rgba(174,173,230,0.2)] text-gray-950 dark:bg-[rgba(121,55,102,0.2)] dark:text-gray-50 dark:text-opacity-90',
      }}
    />
  </React.StrictMode>
);
