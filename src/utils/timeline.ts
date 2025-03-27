import { Course, Education, Experience, TimelineItem } from '@/structures';
import { formatDate } from '@/utils/time';

export function mapEducationToTimelineItem({
  period,
  title,
  university,
  location,
  highlights,
  description,
}: Education): TimelineItem {
  return {
    period,
    title,
    subtitle: university,
    description,
    highlights,
    technologies: [],
    location,
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
}: Experience): TimelineItem {
  return {
    period,
    title: role,
    subtitle: company,
    description,
    highlights,
    technologies: [],
    location,
    url: companyUrl,
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
}: Course): TimelineItem {
  return {
    period: {
      start: undefined,
      finished: formatDate(finishedAt),
    },
    title,
    subtitle: platform.name,
    platform,
    description,
    highlights: [],
    technologies,
    location: '',
    url: courseUrl,
    certUrl: certificateUrl,
    duration,
  };
}
export function mapper<TItem>(
  fn: (item: TItem) => TimelineItem,
  data: TItem[],
): TimelineItem[] {
  return data.map(fn);
}
