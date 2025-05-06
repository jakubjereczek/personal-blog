'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BriefcaseBusiness } from 'lucide-react';

import ContentTeaser from '@/components/content-teaser';
import CoursesPreviewList from '@/components/courses/courses-preview-list';
import Timeline from '@/components/timeline/timeline';
import { aboutMe, courses, education, experience } from '@/config/data';
import { hashKey } from '@/utils/string';
import {
  mapEducationToTimelineItem,
  mapExperienceToTimelineItem,
  mapper,
} from '@/utils/timeline';

export default function AboutPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
        About me
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {aboutMe.map((payload, index) => (
          <p
            key={hashKey(`about-me-${index}`)}
            className="mb-4 text-gray-600 dark:text-gray-400"
          >
            {payload}
          </p>
        ))}
      </motion.div>{' '}
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Experience & education
        </h2>
        <div>
          <p className="text-gray-600 dark:text-gray-400">
            My career and educational history.
          </p>
          <div className="py-4">
            <Timeline
              data={mapper(mapExperienceToTimelineItem, experience)}
              config={{
                Icon: BriefcaseBusiness,
                iconColor: 'bg-green-200',
              }}
            />
            <Timeline
              data={mapper(mapEducationToTimelineItem, education)}
              config={{ Icon: GraduationCap, iconColor: 'bg-blue-200' }}
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Courses
        </h2>
        <div>
          <p className="text-gray-600 dark:text-gray-400">
            I&apos;m trying to keep up with technology and expand my horizons,
            my latest courses:
          </p>
          <div className="py-4">
            <ContentTeaser
              // TODO: when more than 2 courses appear update the value
              maxHeight={150}
              title="Discover more..."
              description="Explore the full list of courses I have completed, along with detailed metadata and insights. Visit the Courses subpage to see my learning journey since I created this personal page."
              text="View all"
              link="/courses"
            >
              <CoursesPreviewList courses={courses} />
            </ContentTeaser>
          </div>
        </div>
      </div>
    </>
  );
}
