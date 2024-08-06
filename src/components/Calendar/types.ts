import { startDay } from '@/interfaces';

export interface CalendarProps {
  startYear: number;
  endYear: number;
  weekStartDay: startDay;
  withExtraDays: boolean;
  withWeekends: boolean;
  withHolidays: boolean;
}
