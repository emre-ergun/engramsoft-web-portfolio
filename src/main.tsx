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
    <Toaster position='top-right' />
  </React.StrictMode>
);
