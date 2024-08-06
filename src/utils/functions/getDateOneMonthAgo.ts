import { format, parse, subMonths } from 'date-fns';

export const getDateOneMonthAgo = (date: string) => {
  const parsedDate = parse(date, 'MMMM yyyy', new Date());
  const oneMonthAgo = subMonths(parsedDate, 1);
  return format(oneMonthAgo, 'MMMM yyyy');
};
