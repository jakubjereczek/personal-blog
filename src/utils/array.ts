export function getDistinctValues<T, R>(
  items: T[],
  getValue: (item: T) => R[],
): R[] {
  return Array.from(new Set(items.flatMap(getValue)));
}
