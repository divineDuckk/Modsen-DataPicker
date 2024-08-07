import { startDay } from '@/interfaces';
import { DatePickerProps } from '@/components/DatePicker/types';

export interface CalendarProps extends DatePickerProps {
  startYear: number;
  endYear: number;
  weekStartDay: startDay;
  withExtraDays: boolean;
  withWeekends: boolean;
  withHolidays: boolean;
}
