import { startDay } from '@/interfaces';
import { DatePickerProps } from '@/components/DatePicker/types';
import { RangeDatePickerProps } from '@/components/RangeDatePicker/types';
import { TaskPickerProps } from '@/components/TaskPicker/types';

export interface CalendarProps
  extends DatePickerProps,
    RangeDatePickerProps,
    TaskPickerProps {
  startYear: number;
  endYear: number;
  weekStartDay: startDay;
  withExtraDays: boolean;
  withWeekends: boolean;
  withHolidays: boolean;
}
