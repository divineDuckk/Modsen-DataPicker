import { format } from 'date-fns';

import { getCurrentDate } from '@/utils/functions/getCurrentDate';

describe('getCurrentDate', () => {
  it('should return the current date in "MMMM yyyy" format', () => {
    const today = new Date();
    const formattedDate = format(today, 'MMMM yyyy');
    expect(getCurrentDate()).toBe(formattedDate);
  });
});
