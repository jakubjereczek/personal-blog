'use client';

import { Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import Tag from '@/components/tag';
import {
  TimelineItem as ITimelineItem,
  TimelineConfig,
  TimelineItemRenderType,
} from '@/structures';
import { hashKey } from '@/utils/string';
import { convertMinutesToHours } from '@/utils/time';

function TimelineItemCourse({
  item,
}: {
  item: ITimelineItem<TimelineItemRenderType.Course>;
  config: TimelineConfig;
}) {
  return (
    <div className="flex flex-grow flex-col py-8">
      <div>
        <div className="flex gap-2">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.args.platform.color}`}
          >
            <item.args.platform.Icon size={24} />
          </div>

          <div>
            <div className="flex gap-2">
              <span className="text-black-600 block font-bold dark:text-white">
                {item.title}
              </span>
              <div className="flex gap-1">
                {item.args.technologies.map((technology, index) => (
                  <Tag
                    key={hashKey(`timeline-${technology.name}-${index}`)}
                    value={technology.name}
                    icon={{
                      Icon: technology.Icon,
                      color: technology.color,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {item.args.duration && (
                <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={16} />
                  <span>{convertMinutesToHours(item.args.duration)}h</span>
                </span>
              )}
              <Link href={item.args.url}>
                <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <ShieldAlert size={16} /> <span>Course</span>
                </span>
              </Link>
              {item.args.certUrl && (
                <Link href={item.args.certUrl}>
                  <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <ShieldAlert size={16} /> <span>Certificate</span>
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 text-gray-600 dark:text-gray-400">
        {item.description}
      </div>
      <div className="flex gap-4 pt-4"></div>
    </div>
  );
}

export default TimelineItemCourse;
