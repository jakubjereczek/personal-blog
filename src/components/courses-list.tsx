'use client';

import { BookCheck } from 'lucide-react';
import React from 'react';

import Timeline from '@/components/timeline/timeline';
import { courses } from '@/config/data';
import { mapper, mapCourseToTimelineItem } from '@/utils/timeline';

function CoursesList({
  technologies,
  platforms,
}: {
  technologies: string[];
  platforms: string[];
}) {
  return (
    <Timeline
      data={mapper(
        mapCourseToTimelineItem,
        courses.filter(
          (course) =>
            course.technologies.some(
              (t) => technologies.length === 0 || technologies.includes(t.name),
            ) &&
            (platforms.length === 0 ||
              platforms.includes(course.platform.name)),
        ),
      )}
      // TODO: config as fallback if platform is not provided
      config={{
        Icon: BookCheck,
        iconColor: 'bg-green-200',
      }}
    />
  );
}

export default CoursesList;
