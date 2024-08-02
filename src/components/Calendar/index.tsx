import { FC } from 'react';

import styles from './calendar.module.css';
import { CalendarProps } from './types';

export const Calendar: FC<CalendarProps> = ({ text }) => {
  return <div className={styles.div}>{text}</div>;
};
