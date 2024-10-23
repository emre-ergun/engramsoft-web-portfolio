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
  'Git',
  'Tailwind',
  'Nativewind',
  'React Context',
  'Python',
  'Rust',
  'Framer Motion',
] as const;

import ProfilePicture from '/profile.png';
import testPicture from '/test.svg';

export { ProfilePicture, testPicture };
