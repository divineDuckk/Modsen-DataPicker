import { MAX_MONTH_PER_YEAR } from '@/constants';

export const checkMonthInRange = (dateString: string): boolean => {
  const month = dateString.split('/')[1];
  if (Number(month)! > MAX_MONTH_PER_YEAR) return false;
  if (Number(month)! < 1) return false;
  return true;
};
