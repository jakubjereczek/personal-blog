import { Education, Experience, TimelineItem } from '@/structures';

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
    location,
    url: undefined,
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
    location,
    url: companyUrl,
  };
}

export function mapper<TItem>(
  fn: (item: TItem) => TimelineItem,
  data: TItem[],
): TimelineItem[] {
  return data.map(fn);
}
