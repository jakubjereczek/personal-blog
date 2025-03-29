import React from 'react';

import CoursePreview from '@/components/course-preview';
import ItemRenderer from '@/components/item-renderer';
import { Course } from '@/structures';
import { hashKey } from '@/utils/string';

function CoursesPreviewList({ courses }: { courses: Course[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      <ItemRenderer<Course>
        items={courses}
        onItemRender={(course, index) => (
          <CoursePreview course={course} index={index} />
        )}
        onKeyExtract={(course, index) => hashKey(`${course.title}${index}`)}
      />
    </div>
  );
}

export default CoursesPreviewList;
