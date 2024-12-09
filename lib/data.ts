import React from 'react';
import ProfilePicture from '/profile.svg';
import adminDashboard from '/admin-dashboard.png';
import mobileShop from '/mobile-shop.png';
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
  'Zustand',
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
    tags: [
      'React',
      'Tailwind',
      'TypeScript',
      'Emailjs',
      'Tailwind',
      'Vite',
      'Github CI/CD',
    ],
    imageUrl: portfolioSite,
    url: 'https://portfolio.engramsoft.com',
  },
  {
    title: 'Blog Web Site',
    description:
      'I developed a blog website. It is based on React and React Router. Supabase as a backend and TipTap for creating new posts. You can test editor on New Post page.',
    tags: [
      'React',
      'Tailwind',
      'TypeScript',
      'React Router',
      'Supabase',
      'TipTap',
      'React Query',
    ],
    imageUrl: blogSite,
    url: 'https://blog.engramsoft.com',
  },
  {
    title: 'Admin Dashboard',
    description:
      'I developed an Admin Dashboard to manage products, categories and orders. It is able to send notifications to mobile application. It is based on Next.js and Typescript. It is a video tutorial from freecodecamp.org',
    tags: [
      'Next.js',
      'Typescript',
      'shadcn/ui',
      'Framer',
      'Vercel',
      'supabase',
    ],
    imageUrl: adminDashboard,
    url: 'https://engramsoft-shop-admin.vercel.app/admin',
  },
  {
    title: 'Mobile App - Shopping',
    description:
      'I developed a mobile applicaiton for online shopping. It is based on React Native and Expo. It is a video tutorial from freecodecamp.org',
    tags: [
      'React Native',
      'expo',
      'Typescript',
      'zustand',
      'supabase',
      'stripe',
    ],
    imageUrl: mobileShop,
    url: 'https://github.com/emre-ergun/engramsoft-rn-shop',
  },
] as const;

export { ProfilePicture };
