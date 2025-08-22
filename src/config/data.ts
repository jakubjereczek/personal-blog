import {
  SiCucumber,
  SiGo,
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
    period: { start: '07.2021', finished: '08.2025' },
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
  {
    period: { start: '08.2025', finished: 'now' },
    company: 'NAVBLUE',
    companyUrl: 'https://www.navblue.aero/',
    location: 'Gdańsk',
    role: 'Frontend developer',
    description: 'Software for the aviation industry.',
    highlights: [],
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

export type TechnologyName =
  | 'JavaScript'
  | 'TypeScript'
  | 'Next'
  | 'React'
  | 'Go'
  | 'Gherkin';

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
  Go: {
    name: 'Golang',
    Icon: SiGo,
    colors: ['blue-600'],
  },
  Gherkin: {
    name: 'Gherkin',
    Icon: SiCucumber,
    colors: ['green-400']
  },
};

export const platforms: { [key in PlatformName]: Platform } = {
  Udemy: {
    name: 'Udemy',
    Icon: SiUdemy,
    color: 'violet-300',
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
  {
    title: 'Go - The Complete Guide',
    description:
      'I learned Go programming from the ground up, covering everything from basic syntax to advanced concepts like goroutines, channels, interfaces, and data structures. I built several practical projects, including a complete REST API with authentication and SQL database integration.',
    finishedAt: '2025-04-16T08:00:00',
    technologies: [technologies.Go],
    duration: 930,
    platform: platforms.Udemy,
    certificateUrl:
      'https://www.udemy.com/certificate/UC-c033057d-273d-408d-8e4d-d8ada130e5ba/',
    courseUrl: 'https://www.udemy.com/course/go-the-complete-guide/',
  },
  {
    title: 'Gherkin Language - The Master Guide',
    description:
      'I learned how to write Behaviour Driven Development (BDD) requirements and tests using the Gherkin language with Cucumber. I covered all Gherkin keywords and syntax, practiced structuring feature files with scenarios, backgrounds, and step definitions, and improved existing test cases through refactoring exercises.',
    finishedAt: '2025-04-16T16:00:00',
    technologies: [technologies.Gherkin],
    duration: 332,
    platform: platforms.Udemy,
    certificateUrl:
      'https://www.udemy.com/certificate/UC-3d952cf6-f933-43cd-8e97-e31871494193/',
    courseUrl: 'https://www.udemy.com/course/gherkin-language-the-master-guide/',
  },
].reverse();

export const { years: expYears, str: expString } = calculateYearsSince(
  experience.at(-1)?.period.start?.slice(0, 7) ?? '',
);

export const aboutMe = [
  `Hi there! I'm Jakub, a passionate software developer with ${expString} commercial experience in web development.`,
  'Commercially, I specialize in front-end development, but I’m actively expanding my skills toward full-stack. My interests gravitate toward two languages: JavaScript (including TypeScript) and Go. On the JavaScript front, I’m particularly interested in React, Next.js, Node.js, and Nest.js.',
  'This blog is my platform to share insights, thoughts on (web) development, trends and technologies in general. I created this space to serve as a reflection of my personal growth. I hope you find the content here useful and inspiring. Feel free to reach out if you have any questions.',
];
