import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';
import { startDay } from '@/interfaces';
import { WEEKS_START_WITH_MONDAY, WEEKS_START_WITH_SUNDAY } from '@/constants';

export const getCurrentDate = () => {
  return format(new Date(), 'MMMM yyyy');
};
export const getDateOneMonthAgo = (date: string) => {
  const parsedDate = parse(date, 'MMMM yyyy', new Date());
  const oneMonthAgo = subMonths(parsedDate, 1);
  return format(oneMonthAgo, 'MMMM yyyy');
};
export const getDateOneMonthAhead = (date: string) => {
  const parsedDate = parse(date, 'MMMM yyyy', new Date());
  const oneMonthAhead = addMonths(parsedDate, 1);
  return format(oneMonthAhead, 'MMMM yyyy');
};
export const dateRange = (start: number, end: number) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const getFirstDayOfWeek = (dateString: string) => {
  const [month, year] = dateString.split(' ');
  const date = new Date(`${month} 1, ${year}`);
  const firstDay = startOfMonth(date);
  return format(firstDay, 'EEEE');
};
const getDaysInMonth = (dateString: string): number => {
  const parsedDate = parse(dateString, 'MMMM yyyy', new Date());

  const start = parsedDate;
  const end = endOfMonth(parsedDate);

  const days = eachDayOfInterval({ start, end });
  return days.length;
};

const getPosInDays = (weekStartDay: startDay, firstDayAtWeek: string) => {
  if (weekStartDay === 'monday') {
    return WEEKS_START_WITH_MONDAY.findIndex(day => {
      const currentDay = firstDayAtWeek[0]! + firstDayAtWeek[1];
      return day === currentDay;
    });
  }
  return WEEKS_START_WITH_SUNDAY.findIndex(day => {
    const currentDay = firstDayAtWeek[0]! + firstDayAtWeek[1];
    return day === currentDay;
  });
};
export const getDays = (dateString: string, weekStartDay: startDay) => {
  const parsedDate = parse(dateString, 'MMMM yyyy', new Date());
  const firstDayAtWeek = getFirstDayOfWeek(dateString);
  const pos = getPosInDays(weekStartDay, firstDayAtWeek);
  const daysLength = getDaysInMonth(dateString) + pos;
  const days = [];
  let subDaysPos = pos;
  let addDaysPos = 0;
  console.log(pos);
  for (let i = 0; i < daysLength; i++) {
    if (i < pos) {
      days.push({
        day: subDays(parsedDate, subDaysPos),
      });
      subDaysPos--;
    } else {
      days.push({
        day: addDays(parsedDate, addDaysPos),
      });
      addDaysPos++;
    }
  }
  return days;
};
