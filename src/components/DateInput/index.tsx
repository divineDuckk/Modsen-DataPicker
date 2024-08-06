import {
  DATE_INPUT_MAX_LENGTH,
  DATE_INPUT_PLACEHOLDER,
  WRONG_DATE,
} from './constants';
import classNames from 'classnames';
import { FC } from 'react';

import CalendarIcon from '@/assets/calendar.svg';
import ClearInputIcon from '@/assets/clear.svg';

import styles from './dateinput.module.css';
import { DateInputProps } from './types';

export const DateInput: FC<DateInputProps> = ({
  dateValue,
  title,
  handleChange,
  isInputError,
  handleClear,
}) => {
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
          onChange={handleChange}
          className={inputClassName}
        />
        <button>
          <ClearInputIcon onClick={handleClear} />
        </button>
      </div>
      {isInputError && <p className={styles.wrongDate}>{WRONG_DATE}</p>}
    </div>
  );
};
