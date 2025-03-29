'use client';

import { Suspense } from 'react';

import Courses from '@/components/courses';

export default function CoursesPage() {
  return (
    <Suspense>
      <Courses />
    </Suspense>
  );
}
