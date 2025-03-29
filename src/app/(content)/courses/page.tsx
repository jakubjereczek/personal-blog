import { FilterIcon } from 'lucide-react';
import Link from 'next/link';

import CoursesList from '@/components/courses-list';
import CoursesProgressBar from '@/components/courses-progress-bar';
import Tag from '@/components/tag';
import { courses as allCourses } from '@/config/data';
import { getDistinctValues } from '@/utils/array';
import { hashKey } from '@/utils/string';
import { parseStringToArray, toggleQueryParam } from '@/utils/url';

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ technologies?: string; platforms?: string }>;
}) {
  const { technologies, platforms } = await searchParams;
  const allTechnologies = getDistinctValues(
    allCourses,
    (course) => course.technologies,
  );
  const allPlatforms = getDistinctValues(allCourses, (course) => [
    course.platform,
  ]);
  const filteredTechnologies = parseStringToArray(technologies);
  const filteredPlatforms = parseStringToArray(platforms);

  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
        Courses
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Explore my educational path through various online platforms and
        technologies. Each point represents a course I&apos;ve completed in my
        continuous learning journey.
      </p>
      <div className="pb-4 pt-8">
        <CoursesProgressBar
          technologies={filteredTechnologies}
          platforms={filteredPlatforms}
        />
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-200">
            <FilterIcon size={16} /> Filter Courses
          </div>
          <Link href={`/courses`} className="text-gray-600 dark:text-gray-400">
            Clear filters
          </Link>
        </div>
      </div>
      <div className="pt-4">
        <p className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((technology, index) => (
            <Link
              href={`/courses/?${toggleQueryParam('technologies', filteredTechnologies, technology.name)}&${toggleQueryParam(
                'platforms',
                filteredPlatforms,
              )}`}
              key={hashKey(`courses-tech-${technology.name}-${index}`)}
            >
              <Tag
                value={technology.name}
                icon={{
                  Icon: technology.Icon,
                  colors: technology.colors,
                }}
                active={filteredTechnologies.includes(technology.name)}
                cursor={true}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="pt-4">
        <p className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
          Platforms
        </p>
        <div className="flex flex-wrap gap-2">
          {allPlatforms.map((platform, index) => (
            <Link
              href={`/courses/?${toggleQueryParam('platforms', filteredPlatforms, platform.name)}&${toggleQueryParam(
                'technologies',
                filteredTechnologies,
              )}`}
              key={hashKey(`courses-platform-${platform.name}-${index}`)}
            >
              <Tag
                value={platform.name}
                icon={{
                  Icon: platform.Icon,
                  colors: [platform.color],
                }}
                active={filteredPlatforms.includes(platform.name)}
                cursor={true}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="pt-8">
        <CoursesList
          technologies={filteredTechnologies}
          platforms={filteredPlatforms}
        />
      </div>
    </>
  );
}
