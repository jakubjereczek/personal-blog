'use client';

import { BookCheck } from 'lucide-react';

import Timeline from '@/components/timeline/timeline';
import { courses } from '@/config/data';
import { mapCourseToTimelineItem, mapper } from '@/utils/timeline';

export default function CoursesPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
        Courses
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Explore my educational path through various online platforms and
        technologies.
      </p>
      <div className="pt-4">
        {/* TODO: progress bar with hours */}
        {/* TODO: filtered courses */}
        {/* TODO: filter courses - clear filters btn */}
        {/* TODO: filter courses - filter by platforms */}
        {/* TODO: filter courses - filter by technologies */}
        <Timeline
          data={mapper(mapCourseToTimelineItem, courses)}
          // TODO: config as fallback if platform is not provided
          config={{
            Icon: BookCheck,
            iconColor: 'bg-green-200',
          }}
        />
      </div>
    </>
  );
}
