/* eslint-disable react/display-name */
import {
  DATE,
  FIRST_SLASH_POS,
  INPUT_REGEXP,
  LAST_SLASH_POS,
} from './constants';
import { ChangeEvent, ComponentType, useState } from 'react';

import { CalendarProps } from '@/components/Calendar/types';
import { DateInput } from '@/components/DateInput';
import { Calendar } from '@/components/Calendar';
import { checkDate } from '@/utils/functions';

import { datePickerService } from './service';

const withCalendarDatePickInput = <P extends CalendarProps>(
  WrappedComponents: ComponentType<P>,
) => {
  return (props: P) => {
    const [dateInputValue, setDateInputValue] = useState(
      datePickerService.getDateValue(),
    );
    const [isInputError, setIsInputError] = useState(false);

    const handleDateValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { startYear, endYear } = props;
      let newValue = e.target.value.replace(INPUT_REGEXP, '');
      if (newValue.length > FIRST_SLASH_POS)
        newValue = `${newValue.slice(0, FIRST_SLASH_POS)}/${newValue.slice(FIRST_SLASH_POS)}`;
      if (newValue.length > LAST_SLASH_POS)
        newValue = `${newValue.slice(0, LAST_SLASH_POS)}/${newValue.slice(LAST_SLASH_POS)}`;

      if (newValue.length === 10 && !checkDate(newValue, startYear, endYear)) {
        setIsInputError(true);
      } else {
        setIsInputError(false);
      }

      datePickerService.setDateValue(newValue);
      setDateInputValue(datePickerService.getDateValue());
    };

    const handleDateValueClear = () => {
      setIsInputError(false);
      datePickerService.setDateValue('');
      setDateInputValue(datePickerService.getDateValue());
    };

    const handlePickDay = (date: string) => () => {
      datePickerService.setDateValue(date);
      setDateInputValue(datePickerService.getDateValue());
    };

    return (
      <>
        <DateInput
          dateValue={dateInputValue}
          handleChange={handleDateValueChange}
          title={DATE}
          isInputError={isInputError}
          handleClear={handleDateValueClear}
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
