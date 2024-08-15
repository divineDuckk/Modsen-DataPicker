import { FC } from 'react';

import { getDateOneMonthAgo } from '@/utils/functions/getDateOneMonthAgo';
import { getDateOneMonthAhead } from '@/utils/functions/getDateOneMonthAhead';
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
      <button
        data-testid="prev"
        className={styles.headerButton}
        onClick={handlePrev}
      >
        <Prev />
      </button>
      <button
        data-testid="date-btn"
        className={styles.headerButton}
        onClick={handleDateClick}
      >
        {date}
      </button>
      <button
        data-testid="next"
        className={styles.headerButton}
        onClick={handleNext}
      >
        <Next />
      </button>
    </div>
  );
};
