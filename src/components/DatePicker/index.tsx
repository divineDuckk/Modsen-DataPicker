/* eslint-disable react/display-name */
import { ComponentType, useState } from 'react';

import { CalendarProps } from '@/components/Calendar/types';
import { DateInput } from '@/components/DateInput';
import { Calendar } from '@/components/Calendar';

import { DATE } from './constants';
import { datePickerService } from './service';

const withCalendarDatePickInput = <P extends CalendarProps>(
  WrappedComponents: ComponentType<P>,
) => {
  return (props: P) => {
    const [dateInputValue, setDateInputValue] = useState(
      datePickerService.getDateValue(),
    );

    const handlePickDay = (date: string) => () => {
      datePickerService.setDateValue(date);
      setDateInputValue(datePickerService.getDateValue());
    };

    return (
      <>
        <DateInput
          dateValue={dateInputValue}
          setInputValue={setDateInputValue}
          title={DATE}
          startYear={props.startYear}
          endYear={props.endYear}
          getServiceValue={datePickerService.getDateValue.bind(
            datePickerService,
          )}
          setServiceValue={datePickerService.setDateValue.bind(
            datePickerService,
          )}
        />
        <WrappedComponents
          {...props}
          handlePickDay={handlePickDay}
          startDate={dateInputValue}
        />
      </>
    );
  };
};
export const DatePicker = withCalendarDatePickInput(Calendar);
