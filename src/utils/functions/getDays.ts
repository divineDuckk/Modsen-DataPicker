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
import {
  MOCKED_HOLYDAYS,
  WEEKS_START_WITH_MONDAY,
  WEEKS_START_WITH_SUNDAY,
} from '@/constants';
import { Day, startDay } from '@/interfaces';

const isHoliday = (date: string): boolean => {
  return MOCKED_HOLYDAYS.some(holyday => {
    const dateWithoutYear = date.substring(5);
    const holidayWithoutYear = holyday.startDate.substring(5);
    return dateWithoutYear === holidayWithoutYear;
  });
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
  const days: Day[] = [];

  let subDaysPos = pos;
  let addDaysPos = 0;

  const generateDays = (date: Date, extraDay: boolean) => {
    const day = format(date, 'd');
    const fullDate = format(date, 'yyyy-MM-dd');
    days.push({
      fullDate: fullDate,
      day: day,
      extraDay: extraDay,
      isWeekend: isWeekend(date),
      isHoliday: isHoliday(fullDate),
    });
  };

  Array.from({ length: daysLength }).forEach((_, i) => {
    if (i < pos) {
      const date = subDays(parsedDate, subDaysPos);
      generateDays(date, true);
      subDaysPos--;
    } else {
      const date = addDays(parsedDate, addDaysPos);
      generateDays(date, false);
      addDaysPos++;
    }
  });

  const lastExtraPos = 7 - (days.length % 7);
  if (lastExtraPos !== 7) {
    Array.from({ length: lastExtraPos }).forEach(() => {
      const date = addDays(parsedDate, addDaysPos);
      generateDays(date, true);
      addDaysPos++;
    });
  }

  return days;
};
