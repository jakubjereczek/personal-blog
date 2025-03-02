import { Experience } from '@/structures';
import { calculateYearsSince } from '@/utils/time';

export const experiences: Experience[] = [
  {
    period: '07.2021 – now',
    company: 'OKE Software',
    role: 'Frontend developer',
    color: '#0066FF',
    description:
      'Develop Smart TV project for the leading European provider of video and pay TV.',
  },
] as const;

export const aboutMe = [
  `Hi there! I'm Jakub, a passionate software developer with ${calculateYearsSince(experiences[0].period.slice(0, 7))} commercial experience in web development.`,
  'I specialize in front-end development, with a strong focus on React and Next.js. Additionally, I am expanding my expertise in backend technologies like Node.js and Nest.js. I primarily work within the JavaScript ecosystem, although I also have some experience with other stuffs. I love creating user-friendly interfaces and solving complex problems with clean, efficient code.',
  'This blog is my platform to share insights, thoughts on web development, trends and technology in general. I created this space to serve as a reflection of my personal growth. I hope you find the content here useful and inspiring. Feel free to reach out if you have any questions.',
];
