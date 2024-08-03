import { getDateOneMonthAgo, getDateOneMonthAhead } from '@/utils/functions';
import { FC } from 'react';

import next from '@/assets/next.svg';
import prev from '@/assets/prev.svg';

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
        <img src={prev} alt="prev button" />
      </button>
      <button className={styles.headerButton} onClick={handleDateClick}>
        {date}
      </button>
      <button className={styles.headerButton} onClick={handleNext}>
        <img src={next} alt="next button" />
      </button>
    </div>
  );
};
