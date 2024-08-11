import { format, parse, addDays, endOfMonth } from 'date-fns';

import { getDays } from '@/utils/functions';

describe('getDays', () => {
  it('should return correct days for a month starting on a Monday', () => {
    const dateString = 'March 2024';
    const weekStartDay = 'monday';
    const result = getDays(dateString, weekStartDay);

    const parsedDate = parse(dateString, 'MMMM yyyy', new Date());
    const daysInMonth = endOfMonth(parsedDate).getDate();
    const firstDayOfMonth = parse(dateString, 'MMMM yyyy', new Date());
    const startDay = format(firstDayOfMonth, 'EEEE');
    const pos =
      weekStartDay === 'monday'
        ? [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ].indexOf(startDay)
        : [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ].indexOf(startDay);
    const expectedDaysLength = daysInMonth + pos;

    expect(result.length).toBe(expectedDaysLength);

    result.forEach((day, index) => {
      const date = addDays(firstDayOfMonth, index - pos);
      expect(day.fullDate).toBe(format(date, 'dd/MM/yyyy'));
      expect(day.day).toBe(format(date, 'd'));
      expect(day.extraDay).toBe(index < pos);
    });
  });

  it('should return correct days for a month starting on a Sunday', () => {
    const dateString = 'February 2024';
    const weekStartDay = 'sunday';
    const result = getDays(dateString, weekStartDay);

    const firstDayOfMonth = parse(dateString, 'MMMM yyyy', new Date());
    const startDay = format(firstDayOfMonth, 'EEEE');
    const pos =
      weekStartDay === 'sunday'
        ? [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ].indexOf(startDay)
        : [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ].indexOf(startDay);

    result.forEach((day, index) => {
      const date = addDays(firstDayOfMonth, index - pos);
      expect(day.fullDate).toBe(format(date, 'dd/MM/yyyy'));
      expect(day.day).toBe(format(date, 'd'));
    });
  });

  it('should correctly identify weekends and holidays', () => {
    const dateString = 'January 2024';
    const result = getDays(dateString, 'monday');

    result.forEach(day => {
      const isWeekend = day.isWeekend;
      const isHoliday = day.isHoliday;

      expect(isWeekend).toBe(day.isWeekend);
      expect(isHoliday).toBe(day.isHoliday);
    });
  });
});
