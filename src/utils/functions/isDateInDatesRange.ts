import { parse, isWithinInterval } from 'date-fns';

export const isDateInRange = (
  currentDate: string,
  startDate: string,
  endDate: string,
) => {
  const dateFormat = 'dd/MM/yyyy';

  const current = parse(currentDate, dateFormat, new Date());
  const start = parse(startDate, dateFormat, new Date());
  const end = parse(endDate, dateFormat, new Date());

  return isWithinInterval(current, { start, end });
};
