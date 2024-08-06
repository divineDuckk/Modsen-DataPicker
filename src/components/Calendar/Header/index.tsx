import { FC } from 'react';

import { getDateOneMonthAgo, getDateOneMonthAhead } from '@/utils/functions';
import Next from '@/assets/next.svg';
import Prev from '@/assets/prev.svg';

import styles from './header.module.css';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({
  setIsHeaderMenuOpen,
  date,
  setDate,
}) => {
  const handlePrev = () => {
    const newDate = getDateOneMonthAgo(date);
    setDate(newDate);
  };
  const handleNext = () => {
    const newDate = getDateOneMonthAhead(date);
    setDate(newDate);
  };
  const handleDateClick = () => {
    setIsHeaderMenuOpen(prev => !prev);
  };

  return (
    <div className={styles.header}>
      <button className={styles.headerButton} onClick={handlePrev}>
        <Prev />
      </button>
      <button className={styles.headerButton} onClick={handleDateClick}>
        {date}
      </button>
      <button className={styles.headerButton} onClick={handleNext}>
        <Next />
      </button>
    </div>
  );
};
