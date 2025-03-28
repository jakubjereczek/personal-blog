'use client';

import { MapPin, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import Tag from '@/components/tag';
import {
  TimelineItem as ITimelineItem,
  TimelineConfig,
  TimelineItemRenderType,
} from '@/structures';
import { hashKey } from '@/utils/string';

function TimelineItemQualifications({
  item,
  config: { Icon, iconColor },
}: {
  item: ITimelineItem<TimelineItemRenderType.Qualifications>;
  config: TimelineConfig;
}) {
  return (
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
              {item.args.url ? (
                <Link href={item.args.url}>
                  <LinkIcon size={12} />
                </Link>
              ) : null}
              {item.subtitle}
            </span>
          </div>
        </div>
        <div>
          <span className="flex items-center gap-2 pt-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin size={16} /> <span>{item.args.location}</span>
          </span>
        </div>
      </div>
      <div className="pt-2 text-gray-600 dark:text-gray-400">
        {item.description}
      </div>
      <div className="pt-4">
        {item.args.highlights.map((highlight, index) => (
          <Tag
            key={hashKey(`education-timeline-${highlight}-${index}`)}
            value={highlight}
          />
        ))}
      </div>
    </div>
  );
}

export default TimelineItemQualifications;
