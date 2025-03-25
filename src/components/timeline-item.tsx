'use client';

import { motion } from 'framer-motion';
import { LucideIcon, MapPin, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { TimelineItem as ITimelineItem } from '@/structures';
import { hashKey } from '@/utils/string';

interface TimelineConfig {
  Icon: LucideIcon;
  iconColor: string;
}

function TimelineItem({
  item,
  index,
  config: { Icon, iconColor },
}: {
  item: ITimelineItem;
  index: number;
  config: TimelineConfig;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      <div className="flex" ref={ref}>
        <div className="relative flex w-8 shrink-0">
          <div className="absolute left-2 top-0 h-full w-[2px] border-2 border-dashed border-gray-200 dark:border-gray-700"></div>
          <div className="absolute top-0 z-10 flex gap-4">
            <div className="h-5 w-5 rounded-full bg-blue-600 shadow-lg dark:bg-blue-400"></div>
            <div className="text-black-600 block w-max text-sm tracking-wide dark:text-white">
              {item.period.start} - {item.period.finished}
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col py-8">
          <div>
            <div className="flex gap-2">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconColor}`}
              >
                <Icon size={24} />
              </div>
              <div>
                <span className="text-black-600 block font-bold dark:text-white">
                  {item.title}
                </span>
                <span className="block flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  {item.url ? (
                    <Link href={item.url}>
                      <LinkIcon size={12} />
                    </Link>
                  ) : null}
                  {item.subtitle}
                </span>
              </div>
            </div>
            <div>
              <span className="flex items-center gap-1 pt-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={16} /> <span>{item.location}</span>
              </span>
            </div>
          </div>
          <div className="pt-2 text-gray-600 dark:text-gray-400">
            {item.description}
          </div>
          <div className="pt-4">
            {item.highlights.map((highlight, index) => (
              <div
                key={hashKey(`education-timeline-${highlight}-${index}`)}
                className="m-0.5 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1 text-sm text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TimelineItem;
