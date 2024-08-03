import {
  MONTHS,
  WEEKS_START_WITH_MONDAY,
  WEEKS_START_WITH_SUNDAY,
} from '@/constants';
import { FC, useState } from 'react';

import { dateRange, getCurrentDate, getDays } from '@/utils/functions';

import { PopUp } from '../PopUp';
import styles from './calendar.module.css';
import { MONDAY } from './constants';
import { Header } from './Header';
import { CalendarProps } from './types';

export const Calendar: FC<CalendarProps> = ({
  startYear,
  endYear,
  weekStartDay,
}) => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [date, setDate] = useState(getCurrentDate());
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [currentMonth, currentYear] = date.split(' ');
  const yearsArray = dateRange(startYear, endYear);
  console.log(getDays(date, weekStartDay));
  const handleMonthClick = (month: string) => () => {
    setDate(prev => {
      const year = prev.split(' ')[1];
      return `${month} ${year}`;
    });
    setIsHeaderMenuOpen(false);
  };
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const handleButtonPopupClick = (year: number) => () => {
    setDate(prev => {
      const month = prev.split(' ')[0];
      return `${month} ${year}`;
    });
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.calendar} id="calendar">
      {isHeaderMenuOpen ? (
        <div className={styles.headerMenu}>
          <div className={styles.months}>
            {MONTHS.map(month => (
              <button
                className={currentMonth === month && styles.activeMonth}
                key={month}
                onClick={handleMonthClick(month)}
              >
                {month}
              </button>
            ))}
          </div>
          <button onClick={handlePopupOpen}>{currentYear}</button>
          {isPopupOpen && (
            <PopUp onClose={handlePopupClose} title="Select year">
              <>
                {yearsArray.map(year => (
                  <button
                    onClick={handleButtonPopupClick(year)}
                    className={styles.popupButton}
                    key={year}
                  >
                    {year}
                  </button>
                ))}
              </>
            </PopUp>
          )}
        </div>
      ) : (
        <>
          <Header
            setIsHeaderMenuOpen={setIsHeaderMenuOpen}
            date={date}
            setDate={setDate}
          />
          <div className={styles.weeks}>
            {weekStartDay === MONDAY
              ? WEEKS_START_WITH_MONDAY.map(weekDay => (
                  <div key={weekDay} className={styles.week}>
                    {weekDay}
                  </div>
                ))
              : WEEKS_START_WITH_SUNDAY.map(weekDay => (
                  <div key={weekDay} className={styles.week}>
                    {weekDay}
                  </div>
                ))}
          </div>
        </>
      )}
    </div>
  );
};
