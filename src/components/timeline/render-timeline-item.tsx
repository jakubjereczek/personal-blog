import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import TimelineItemCourse from '@/components/timeline/timeline-item-c';
import TimelineItemQualifications from '@/components/timeline/timeline-item-q';
import {
  TimelineConfig,
  TimelineItem as ITimelineItem,
  TimelineItemRenderType,
  TimelineItem,
} from '@/structures';

function renderTimelineItem(
  item: ITimelineItem<TimelineItemRenderType>,
  config: TimelineConfig,
) {
  switch (item.renderType) {
    case TimelineItemRenderType.Qualifications:
      return (
        <TimelineItemQualifications
          item={item as TimelineItem<TimelineItemRenderType.Qualifications>}
          config={config}
        />
      );
    case TimelineItemRenderType.Course:
      return (
        <TimelineItemCourse
          item={item as TimelineItem<TimelineItemRenderType.Course>}
          config={config}
        />
      );
    default:
      throw new Error('Unsupported render type');
  }
}

export function TimelineGenericItem<
  TRenderType extends TimelineItemRenderType,
>({
  item,
  index,
  config,
}: {
  item: ITimelineItem<TRenderType>;
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
              {item.args.period.start
                ? `${item.args.period.start} - ${item.args.period.finished}`
                : `${item.args.period.finished}`}
            </div>
          </div>
        </div>
        {renderTimelineItem(item, config)}
      </div>
    </motion.div>
  );
}

export default renderTimelineItem;
