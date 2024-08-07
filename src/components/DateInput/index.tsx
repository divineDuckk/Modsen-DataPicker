import {
  DATE_INPUT_MAX_LENGTH,
  DATE_INPUT_PLACEHOLDER,
  FIRST_SLASH_POS,
  INPUT_REGEXP,
  LAST_SLASH_POS,
  WRONG_DATE,
} from './constants';
import classNames from 'classnames';
import { ChangeEvent, FC, useState } from 'react';

import { checkDateInRange } from '@/utils/functions';
import CalendarIcon from '@/assets/calendar.svg';
import ClearInputIcon from '@/assets/clear.svg';

import styles from './dateinput.module.css';
import { DateInputProps } from './types';

export const DateInput: FC<DateInputProps> = ({
  dateValue,
  title,
  endYear,
  setInputValue,
  startYear,
  getServiceValue,
  setServiceValue,
}) => {
  const [isInputError, setIsInputError] = useState(false);

  const handleDateValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(INPUT_REGEXP, '');
    if (newValue.length > FIRST_SLASH_POS)
      newValue = `${newValue.slice(0, FIRST_SLASH_POS)}/${newValue.slice(FIRST_SLASH_POS)}`;
    if (newValue.length > LAST_SLASH_POS)
      newValue = `${newValue.slice(0, LAST_SLASH_POS)}/${newValue.slice(LAST_SLASH_POS)}`;

    if (
      newValue.length === DATE_INPUT_MAX_LENGTH &&
      !checkDateInRange(newValue, startYear, endYear)
    ) {
      setIsInputError(true);
    } else {
      setIsInputError(false);
    }
    setServiceValue(newValue);
    setInputValue(getServiceValue());
  };

  const handleDateValueClear = () => {
    setIsInputError(false);
    setServiceValue('');
    setInputValue(getServiceValue());
  };

  const inputClassName = classNames({
    [styles.wrongRed]: isInputError,
  });

  return (
    <div className={styles.dateInputContainer}>
      <h2>{title}</h2>
      <div className={styles.inputWrapper}>
        <CalendarIcon className={styles.calendarIcon} />
        <input
          type="text"
          value={dateValue}
          placeholder={DATE_INPUT_PLACEHOLDER}
          maxLength={DATE_INPUT_MAX_LENGTH}
          onChange={handleDateValueChange}
          className={inputClassName}
        />
        <button>
          <ClearInputIcon onClick={handleDateValueClear} />
        </button>
      </div>
      {isInputError && <p className={styles.wrongDate}>{WRONG_DATE}</p>}
    </div>
  );
};
