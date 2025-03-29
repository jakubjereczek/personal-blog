export function toggleQueryParam(
  paramName: string,
  currentValues: string[],
  value: string = '',
) {
  const updatedValues = currentValues.includes(value)
    ? currentValues.filter((v) => v !== value)
    : [...currentValues, value];
  const filteredValues = updatedValues.filter((v) => v !== '');

  return `${paramName}=${filteredValues.length > 0 ? filteredValues.join(',') : ''}`;
}

export function parseStringToArray<T>(value: T): string[] {
  if (typeof value === 'string' && value !== '') {
    return value.split(',').map((item) => item.trim());
  }
  return [];
}
