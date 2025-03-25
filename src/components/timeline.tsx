import { LucideIcon } from 'lucide-react';
import React from 'react';

import ItemRenderer from '@/components/item-renderer';
import TimelineItem from '@/components/timeline-item';
import { TimelineItem as ITimelineItem } from '@/structures';
import { hashKey } from '@/utils/string';

interface TimelineConfig {
  Icon: LucideIcon;
  iconColor: string;
}

function Timeline({
  data,
  config,
}: {
  data: ITimelineItem[];
  config: TimelineConfig;
}) {
  return (
    <ItemRenderer<ITimelineItem>
      items={data}
      onItemRender={(item, index) => (
        <TimelineItem index={index} item={item} config={config} />
      )}
      onKeyExtract={(item, index) => hashKey(`${item.title}${index}`)}
    />
  );
}

export default Timeline;
