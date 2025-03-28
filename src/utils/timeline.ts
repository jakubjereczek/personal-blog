import {
  Course,
  Education,
  Experience,
  TimelineItem,
  TimelineItemRenderType,
} from '@/structures';
import { formatDate } from '@/utils/time';

export function mapEducationToTimelineItem({
  period,
  title,
  university,
  location,
  highlights,
  description,
}: Education): TimelineItem<TimelineItemRenderType.Qualifications> {
  return {
    renderType: TimelineItemRenderType.Qualifications,
    title,
    subtitle: university,
    description,
    args: {
      period,
      highlights,
      location,
      url: '',
    },
  };
}

export function mapExperienceToTimelineItem({
  period,
  company,
  companyUrl,
  location,
  role,
  highlights,
  description,
}: Experience): TimelineItem<TimelineItemRenderType.Qualifications> {
  return {
    renderType: TimelineItemRenderType.Qualifications,
    title: role,
    subtitle: company,
    description,
    args: {
      period,
      highlights,
      location,
      url: companyUrl,
    },
  };
}

export function mapCourseToTimelineItem({
  title,
  description,
  finishedAt,
  technologies,
  platform,
  certificateUrl,
  courseUrl,
  duration,
}: Course): TimelineItem<TimelineItemRenderType.Course> {
  return {
    renderType: TimelineItemRenderType.Course,
    title,
    subtitle: platform.name,
    description,
    args: {
      period: {
        start: undefined,
        finished: formatDate(finishedAt),
      },
      platform,
      technologies,
      url: courseUrl,
      certUrl: certificateUrl,
      duration,
    },
  };
}
export function mapper<TItem, TRenderType extends TimelineItemRenderType>(
  fn: (item: TItem) => TimelineItem<TRenderType>,
  data: TItem[],
): TimelineItem<TRenderType>[] {
  return data.map(fn);
}
