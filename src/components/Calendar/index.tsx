import {
  MONTHS,
  WEEKS_START_WITH_MONDAY,
  WEEKS_START_WITH_SUNDAY,
} from '@/constants';
import classNames from 'classnames';
import { FC, useState } from 'react';

import { dateRange, getCurrentDate, getDays } from '@/utils/functions';
import { PopUp } from '@/components/PopUp';

import styles from './calendar.module.css';
import { MONDAY, SUNDAY } from './constants';
import { Header } from './Header';
import { CalendarProps } from './types';

import './theme.css';

export const Calendar: FC<CalendarProps> = ({
  startYear,
  endYear,
  weekStartDay,
  withExtraDays,
  withWeekends,
  withHolidays,
}) => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [date, setDate] = useState(getCurrentDate());
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [currentMonth, currentYear] = date.split(' ');
  const yearsArray = dateRange(startYear, endYear);
  const days = getDays(date, weekStartDay);
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
            {{
              [MONDAY]: WEEKS_START_WITH_MONDAY,
              [SUNDAY]: WEEKS_START_WITH_SUNDAY,
            }[weekStartDay].map(weekDay => (
              <div key={weekDay} className={styles.week}>
                {weekDay}
              </div>
            ))}
          </div>
          <div className={styles.days}>
            {days.map(({ day, extraDay, fullDate, isHoliday, isWeekend }) => {
              const buttonClass = classNames({
                [styles.unVisible]: !withExtraDays && extraDay,
                [styles.extraDay]: extraDay,
                [styles.weekend]: withWeekends && isWeekend,
                [styles.holiday]: withHolidays && isHoliday,
              });
              return (
                <button className={buttonClass} key={fullDate}>
                  {day}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
