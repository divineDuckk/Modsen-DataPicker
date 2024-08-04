import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfMonth,
  subDays,
} from 'date-fns';
import Holidays from 'date-holidays';

import { startDay } from '@/interfaces';
import { WEEKS_START_WITH_MONDAY, WEEKS_START_WITH_SUNDAY } from '@/constants';

const hd = new Holidays('BY');

const isHoliday = (date: Date): boolean => {
  return !!hd.isHoliday(date);
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
const isWeekend = (date: Date): boolean => {
  const dayOfWeek = getDay(date);
  return dayOfWeek === 0 || dayOfWeek === 6;
};

export const getDays = (dateString: string, weekStartDay: startDay) => {
  const parsedDate = parse(dateString, 'MMMM yyyy', new Date());
  const firstDayAtWeek = getFirstDayOfWeek(dateString);
  const pos = getPosInDays(weekStartDay, firstDayAtWeek);
  const daysLength = getDaysInMonth(dateString) + pos;
  const days = [];

  let subDaysPos = pos;
  let addDaysPos = 0;

  for (let i = 0; i < daysLength; i++) {
    if (i < pos) {
      const date = subDays(parsedDate, subDaysPos);
      const day = format(date, 'd');
      const fullDate = format(date, 'dd MMMM yyyy');
      days.push({
        fullDate: fullDate,
        day: day,
        extraDay: true,
        isWeekend: isWeekend(date),
        isHoliday: isHoliday(date),
      });
      subDaysPos--;
    } else {
      const date = addDays(parsedDate, addDaysPos);
      const day = format(date, 'd');
      const fullDate = format(date, 'dd MMMM yyyy');
      days.push({
        fullDate: fullDate,
        extraDay: false,
        day: day,
        isWeekend: isWeekend(date),
        isHoliday: isHoliday(date),
      });
      addDaysPos++;
    }
  }
  const lastExtraPos = 7 - (days.length % 7);
  if (lastExtraPos === 7) return days;
  for (let i = 0; i < lastExtraPos; i++) {
    const date = addDays(parsedDate, addDaysPos);
    const day = format(date, 'd');
    const fullDate = format(date, 'dd MMMM yyyy');
    days.push({
      fullDate: fullDate,
      day: day,
      extraDay: true,
      isWeekend: isWeekend(date),
      isHoliday: isHoliday(date),
    });
    addDaysPos++;
  }
  return days;
};
