import { aboutMe, experiences } from '@/config/data';
import { hashKey } from '@/utils/string';

export default function AboutPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
        About me
      </h2>
      {aboutMe.map((payload, index) => (
        <p
          key={hashKey(`about-me-${index}`)}
          className="mb-4 text-gray-600 dark:text-gray-400"
        >
          {payload}
        </p>
      ))}
      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={hashKey(`tag-${exp.company}-${index}`)}
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
