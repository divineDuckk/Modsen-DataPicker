export const checkMonthInRange = (dateString: string): boolean => {
  const month = dateString.split('/')[1];
  if (Number(month)! > 12) return false;
  if (Number(month)! < 1) return false;
  return true;
};
