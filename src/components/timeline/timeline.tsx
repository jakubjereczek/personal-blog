import React from 'react';

import ItemRenderer from '@/components/item-renderer';
import { TimelineGenericItem } from '@/components/timeline/render-timeline-item';
import {
  TimelineItem as ITimelineItem,
  TimelineConfig,
  TimelineItemRenderType,
} from '@/structures';
import { hashKey } from '@/utils/string';

function Timeline<TRenderType extends TimelineItemRenderType>({
  data,
  config,
}: {
  data: ITimelineItem<TRenderType>[];
  config: TimelineConfig;
}) {
  return (
    <ItemRenderer<ITimelineItem<TRenderType>>
      items={data}
      onItemRender={(item, index) => (
        <TimelineGenericItem index={index} item={item} config={config} />
      )}
      onKeyExtract={(item, index) => hashKey(`${item.title}${index}`)}
    />
  );
}

export default Timeline;
