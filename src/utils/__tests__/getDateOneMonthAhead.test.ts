import { format, parse, addMonths } from 'date-fns';

import { getDateOneMonthAhead } from '@/utils/functions';

describe('getDateOneMonthAhead', () => {
  it('should return the correct date one month ahead for a given date', () => {
    const inputDate = 'August 2023';
    const parsedDate = parse(inputDate, 'MMMM yyyy', new Date());
    const oneMonthAhead = addMonths(parsedDate, 1);
    const expectedDate = format(oneMonthAhead, 'MMMM yyyy');

    expect(getDateOneMonthAhead(inputDate)).toBe(expectedDate);
  });

  it('should handle transition between years correctly', () => {
    const inputDate = 'December 2023';
    const parsedDate = parse(inputDate, 'MMMM yyyy', new Date());
    const oneMonthAhead = addMonths(parsedDate, 1);
    const expectedDate = format(oneMonthAhead, 'MMMM yyyy');

    expect(getDateOneMonthAhead(inputDate)).toBe(expectedDate);
  });

  it('should handle transition from December to January correctly', () => {
    const inputDate = 'December 2024';
    const parsedDate = parse(inputDate, 'MMMM yyyy', new Date());
    const oneMonthAhead = addMonths(parsedDate, 1);
    const expectedDate = format(oneMonthAhead, 'MMMM yyyy');

    expect(getDateOneMonthAhead(inputDate)).toBe(expectedDate);
  });
});
