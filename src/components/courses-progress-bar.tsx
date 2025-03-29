'use client';

import React from 'react';

import ProgressBar from '@/components/progress-bar';
import { courses } from '@/config/data';
import { reduceCoursesDuration } from '@/utils/course';

function CoursesProgressBar({
  technologies,
  platforms,
}: {
  technologies: string[];
  platforms: string[];
}) {
  const duration = reduceCoursesDuration(courses);
  const filteredDuration = reduceCoursesDuration(
    courses,
    (course) =>
      course.technologies.some(
        (t) => technologies.length === 0 || technologies.includes(t.name),
      ) &&
      (platforms.length === 0 || platforms.includes(course.platform.name)),
  );

  return (
    <ProgressBar
      percentage={(filteredDuration / duration) * 100}
      label={`${Math.floor(filteredDuration / 60)} hours of learning`}
      totalLabel={`Total ${Math.floor(duration / 60)} hours`}
    />
  );
}

export default CoursesProgressBar;
