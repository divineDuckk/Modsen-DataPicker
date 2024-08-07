import { startDay } from '@/interfaces';
import { DatePickerProps } from '@/components/DatePicker/types';
import { RangeDatePickerProps } from '@/components/RangeDatePicker/types';

export interface CalendarProps extends DatePickerProps, RangeDatePickerProps {
  startYear: number;
  endYear: number;
  weekStartDay: startDay;
  withExtraDays: boolean;
  withWeekends: boolean;
  withHolidays: boolean;
}
