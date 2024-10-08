/* eslint-disable react/display-name */
import { ComponentType, useState } from 'react';

import { CalendarProps } from '@/components/Calendar/types';
import { DateInput } from '@/components/DateInput';
import { Calendar } from '@/components/Calendar';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import { FROM, TO } from './constants';
import { rangeDatePickerService } from './service';

const withCalendarRangeDatePicker = (
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
    const [startDate, setStartDate] = useState(
      rangeDatePickerService.getStartDate(),
    );
    const [endDate, setEndDate] = useState(rangeDatePickerService.getEndDate());

    const handlePickDay = (date: string) => () => {
      rangeDatePickerService.chooseToSetDate(date);
      setStartDate(rangeDatePickerService.getStartDate());
      setEndDate(rangeDatePickerService.getEndDate());
    };
    return (
      <ErrorBoundary>
        <DateInput
          dateValue={startDate}
          setInputValue={setStartDate}
          title={FROM}
          startYear={startYear}
          endYear={endYear}
          getServiceValue={rangeDatePickerService.getStartDate.bind(
            rangeDatePickerService,
          )}
          setServiceValue={rangeDatePickerService.setStartDate.bind(
            rangeDatePickerService,
          )}
        />
        <DateInput
          dateValue={endDate}
          setInputValue={setEndDate}
          title={TO}
          startYear={startYear}
          endYear={endYear}
          getServiceValue={rangeDatePickerService.getEndDate.bind(
            rangeDatePickerService,
          )}
          setServiceValue={rangeDatePickerService.setEndDate.bind(
            rangeDatePickerService,
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
          startDate={startDate}
          endDate={endDate}
        />
      </ErrorBoundary>
    );
  };
};
export const RangeDatePicker = withCalendarRangeDatePicker(Calendar);
