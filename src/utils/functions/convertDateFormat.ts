import { parse, format } from 'date-fns';

import { INVALID_DATE } from '@/constants';

export const convertDateFormat = (
  dateString: string | undefined,
): string | undefined => {
  const date = parse(dateString!, 'dd/MM/yyyy', new Date());
  if (date.toString() === INVALID_DATE) return;
  return format(date, 'MMMM yyyy');
};
