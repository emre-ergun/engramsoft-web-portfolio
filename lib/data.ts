import React from 'react';
import ProfilePicture from '/profile.svg';
import rmtdevImg from '/rmtdev.png';
import wordanalyticsImg from '/wordanalytics.png';
import portfolioSite from '/portfolio.png';
import blogSite from '/blog.png';
import { VscDebugConsole } from 'react-icons/vsc';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Expo',
  'Vite',
  'Git',
  'Tailwind',
  'Nativewind',
  'React Context',
  'Python',
  'Rust',
  'C/C++',
  'Framer Motion',
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Engineer',
    location: 'EngramSoft - Istanbul, Turkey',
    description:
      'I have been developing web and mobile apps using React, Next.js, and React Native. ',
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
  {
    title: 'Senior Software Engineer',
    location: 'Tech Companies - Istanbul, Turkey',
    description:
      'I have been developing software for embedded platforms. I have a strong background in C, and I am also proficient in Python, Rust, C++, and JavaScript. My experience includes developing high-quality software for IoT solutions, CI/CD processes, and system design.',
    icon: React.createElement(VscDebugConsole),
    date: '2013 - present',
  },
  {
    title: 'Graduated University',
    location: 'Karadeniz Technical University - Trabzon, Turkey',
    description:
      'Bachelor of Science in Electrical and Electronics Engineering.',
    icon: React.createElement(LuGraduationCap),
    date: '2007  - 2012',
  },
] as const;

export const projectsData = [
  {
    title: 'Portfolio Web Site',
    description:
      'I developed my own portfolio website. I used modern frameworks and focused on responsive design. It is automaticaly built and deployed to the cpanel.',
    tags: ['React', 'Tailwind', 'TypeScript', 'Emailjs', 'Tailwind', 'Vite', 'Github CI/CD'],
    imageUrl: portfolioSite,
    url: 'https://portfolio.engramsoft.com',
  },
  {
    title: 'Blog Web Site (WIP)',
    description:
    'I developed a blog website. It is based on React and React Router. I used Supabase as a backend. I used React TipTap Editor for editing posts.',
    tags: ['React', 'Tailwind', 'TypeScript', 'React Router', 'Supabase', 'TipTap Editor', 'Githun CI/CD'],
    imageUrl: blogSite,
    url: 'https://blog.engramsoft.com',
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut erat lobortis, ullamcorper velit eget, bibendum nibh. Duis scelerisque ipsum eu est eleifend venenatis.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
    url: 'https://engramsoft.com',
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut erat lobortis, ullamcorper velit eget, bibendum nibh. Duis scelerisque ipsum eu est eleifend venenatis.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
    url: 'https://engramsoft.com',
  },
] as const;

export { ProfilePicture };
