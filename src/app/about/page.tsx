import { Experience } from '@/config/structures';
import { calculateYearsSince } from '@/utils/time';

const experiences: Experience[] = [
  {
    period: '07.2021 – now',
    company: 'OKE Software',
    role: 'Frontend developer',
    color: '#0066FF',
    description:
      'Develop Smart TV project for the leading European provider of video and pay TV.',
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
        About me
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Hi there! I&apos;m Jakub, a passionate software developer with{' '}
        {calculateYearsSince(experiences[0].period.slice(0, 7))} commercial in
        web development.
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        I specialize in front-end development, with a strong focus on React and
        Next.js. Additionally, I am expanding my expertise in backend
        technologies like Node.js and Nest.js. I primarily work within the
        JavaScript ecosystem, although I also have some experience with Java and
        C# (not commercial). I love creating user-friendly interfaces and
        solving complex problems with clean, efficient code.
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        This blog is my platform to share insights, thoughts on web development,
        trends and technology in general. I created this space to serve as a
        reflection of my personal growth. I hope you find the content here
        useful and inspiring. Feel free to reach out if you have any questions.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/jakubjereczek"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jakubjereczek"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-[100px,1fr] items-baseline gap-4"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {exp.period}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-sm"
                    style={{ backgroundColor: exp.color }}
                  />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {exp.company}
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {exp.role}
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
