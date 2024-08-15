/* eslint-disable react/display-name */
import { ComponentType, useState } from 'react';

import { CalendarProps } from '@/components/Calendar/types';
import { DateInput } from '@/components/DateInput';
import { Calendar } from '@/components/Calendar';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import { DATE } from './constants';
import { datePickerService } from './service';

const withCalendarDatePickInput = (
  WrappedComponents: ComponentType<CalendarProps>,
) => {
  return ({
    endYear,
    startYear,
    weekStartDay,
    withExtraDays,
    withHolidays,
    withWeekends,
  }: CalendarProps) => {
    const [dateInputValue, setDateInputValue] = useState(
      datePickerService.getDateValue(),
    );

    const handlePickDay = (date: string) => () => {
      datePickerService.setDateValue(date);
      setDateInputValue(datePickerService.getDateValue());
    };

    return (
      <ErrorBoundary>
        <DateInput
          dateValue={dateInputValue}
          setInputValue={setDateInputValue}
          title={DATE}
          startYear={startYear}
          endYear={endYear}
          getServiceValue={datePickerService.getDateValue.bind(
            datePickerService,
          )}
          setServiceValue={datePickerService.setDateValue.bind(
            datePickerService,
          )}
        />
        <WrappedComponents
          endYear={endYear}
          startYear={startYear}
          weekStartDay={weekStartDay}
          withExtraDays={withExtraDays}
          withHolidays={withHolidays}
          withWeekends={withWeekends}
          handlePickDay={handlePickDay}
          startDate={dateInputValue}
        />
      </ErrorBoundary>
    );
  };
};

export const DatePicker = withCalendarDatePickInput(Calendar);
