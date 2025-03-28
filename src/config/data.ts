import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiUdemy,
} from 'react-icons/si';

import {
  Course,
  Education,
  Experience,
  Technology,
  Platform,
} from '@/structures';
import { calculateYearsSince } from '@/utils/time';

export const experience: Experience[] = [
  {
    period: { start: '07.2021', finished: 'now' },
    company: 'OKE Software',
    companyUrl: 'https://oke.pl/',
    location: 'Gdańsk / Remote',
    role: 'Frontend developer',
    description:
      'Software development in TypeScript, React. Developing and maintaining a multi-brand smartTV project (includes SPA and Google Cast Receiver application), designed to support over a dozen brands from Europe and Asia. Working in an international team using Agile methodology.',
    highlights: [
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'RxPlayer',
      'WebSocket',
      'REST API',
      'Google Cast Receiver',
      'Firebase',
      'Amplitude',
      'RWD',
      'Webpack',
      'CSS-in-JS',
      'Cypress',
      'Jest',
      'React Testing Library',
      'Sonarcode',
      'Solution Architecture',
      'Streaming Media',
      'Agile Methodology',
      'Jira',
      'Confluence',
      'Teamwork',
    ],
  },
].reverse();

export const education: Education[] = [
  {
    period: { start: '09.2019', finished: '06.2022' },
    title: 'Computer Science and Econometrics',
    university: 'University of Gdańsk',
    location: 'Gdańsk',
    highlights: [
      'C#',
      '.NET',
      'SQL',
      'TSQL',
      'Linux',
      'Data administration',
      'Big data',
    ],
    description: 'Specialization: IT application in business',
  },
  {
    period: { start: '09.2022', finished: '06.2024' },
    title: 'Computer Science and Econometrics',
    university: 'University of Gdańsk',
    location: 'Gdańsk',
    highlights: ['Data warehouse', 'Big data', 'SAP ERP'],
    description: 'Specialization: IT application in business',
  },
].reverse();

export type TechnologyName = 'JavaScript' | 'TypeScript' | 'Next' | 'React';

export type PlatformName = 'Udemy';

export const technologies: { [key in TechnologyName]: Technology } = {
  JavaScript: {
    name: 'JavaScript',
    Icon: SiJavascript,
    colors: ['yellow-400'],
  },
  TypeScript: {
    name: 'TypeScript',
    Icon: SiTypescript,
    colors: ['blue-400'],
  },
  Next: {
    name: 'Next.js',
    Icon: SiNextdotjs,
    colors: ['dark', 'white'],
  },
  React: {
    name: 'React.js',
    Icon: SiReact,
    colors: ['blue-400'],
  },
};

export const platforms: { [key in PlatformName]: Platform } = {
  Udemy: {
    name: 'Udemy',
    Icon: SiUdemy,
    color: 'bg-violet-200',
  },
};

export const courses: Course[] = [
  {
    title: 'Next.15 & React - The Complete Guide',
    description:
      'I learned how to build full-stack ReactJS + NextJS apps using the App Router (without legacy Pages Router), starting from the basics and progressing to more advanced topics.',
    finishedAt: '2024-12-18T16:00:00',
    technologies: [technologies.React, technologies.Next],
    duration: 1160,
    platform: platforms.Udemy,
    certificateUrl: '',
    courseUrl: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
  },
].reverse();

export const { years: expYears, str: expString } = calculateYearsSince(
  experience[0].period.start?.slice(0, 7) ?? '',
);

export const aboutMe = [
  `Hi there! I'm Jakub, a passionate software developer with ${expString} commercial experience in web development.`,
  'Commercially, I specialize in front-end development, but I’m actively expanding my skills toward full-stack. My interests gravitate toward two languages: JavaScript (including TypeScript) and Go. On the JavaScript front, I’m particularly interested in React, Next.js, Node.js, and Nest.js.',
  'This blog is my platform to share insights, thoughts on (web) development, trends and technologies in general. I created this space to serve as a reflection of my personal growth. I hope you find the content here useful and inspiring. Feel free to reach out if you have any questions.',
];
