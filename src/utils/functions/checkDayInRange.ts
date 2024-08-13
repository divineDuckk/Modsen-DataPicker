import { getDaysInMonth, parse } from 'date-fns';

export const checkDayInRange = (dateString: string): boolean => {
  const day = dateString.split('/')[0];
  const date = parse(dateString, 'dd/MM/yyyy', new Date());
  const days = getDaysInMonth(date);
  if (isNaN(days)) return false;
  if (Number(day)! > days) return false;
  if (Number(day)! < 1) return false;
  return true;
};
