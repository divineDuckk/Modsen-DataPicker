export const checkYearInRange = (
  dateString: string,
  startYear: number,
  endYear: number,
): boolean => {
  const year = dateString.split('/')[2];
  if (Number(year)! > endYear) return false;
  if (Number(year)! < startYear) return false;
  return true;
};
