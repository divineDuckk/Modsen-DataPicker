import { format } from 'date-fns';

export const getCurrentDate = () => {
  return format(new Date(), 'MMMM yyyy');
};
