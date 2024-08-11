import { format, parse, subMonths } from 'date-fns';

import { getDateOneMonthAgo } from '@/utils/functions';

describe('getDateOneMonthAgo', () => {
  it('should return the correct date one month ago for a given date', () => {
    const inputDate = 'August 2023';
    const parsedDate = parse(inputDate, 'MMMM yyyy', new Date());
    const oneMonthAgo = subMonths(parsedDate, 1);
    const expectedDate = format(oneMonthAgo, 'MMMM yyyy');

    expect(getDateOneMonthAgo(inputDate)).toBe(expectedDate);
  });

  it('should handle transition between years correctly', () => {
    const inputDate = 'January 2023';
    const parsedDate = parse(inputDate, 'MMMM yyyy', new Date());
    const oneMonthAgo = subMonths(parsedDate, 1);
    const expectedDate = format(oneMonthAgo, 'MMMM yyyy');

    expect(getDateOneMonthAgo(inputDate)).toBe(expectedDate);
  });

  it('should handle February in leap years correctly', () => {
    const inputDate = 'February 2024';
    const parsedDate = parse(inputDate, 'MMMM yyyy', new Date());
    const oneMonthAgo = subMonths(parsedDate, 1);
    const expectedDate = format(oneMonthAgo, 'MMMM yyyy');

    expect(getDateOneMonthAgo(inputDate)).toBe(expectedDate);
  });
});
