'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Tag from '@/components/tag';
import { Course } from '@/structures';
import { hashKey } from '@/utils/string';
import { convertMinutesToHours } from '@/utils/time';

function CoursePreview({
  course: {
    title,
    technologies,
    platform: { Icon, color: platformColor },
    duration,
  },
  index,
}: {
  course: Course;
  index: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      <div className="flex flex-col rounded-full border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div>
          <div className="flex gap-2">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${platformColor}`}
            >
              <Icon size={24} />
            </div>
            <div>
              <div className="flex gap-2">
                <span className="text-black-600 block font-bold dark:text-white">
                  {title}
                </span>
                <div>
                  {technologies.map((technology, index) => (
                    <Tag
                      key={hashKey(
                        `course-preview-${technology.name}-${index}`,
                      )}
                      value={technology.name}
                      icon={{
                        Icon: technology.Icon,
                        colors: technology.colors,
                      }}
                      border={false}
                    />
                  ))}
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <Clock size={16} />{' '}
                <span>{convertMinutesToHours(duration)}h</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CoursePreview;
