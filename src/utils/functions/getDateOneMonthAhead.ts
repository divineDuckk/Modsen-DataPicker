import { addMonths, format, parse } from 'date-fns';

export const getDateOneMonthAhead = (date: string) => {
  const parsedDate = parse(date, 'MMMM yyyy', new Date());
  const oneMonthAhead = addMonths(parsedDate, 1);
  return format(oneMonthAhead, 'MMMM yyyy');
};
