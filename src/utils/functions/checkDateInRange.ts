import { checkDayInRange } from './checkDayInRange';
import { checkMonthInRange } from './checkMonthInRange';
import { checkYearInRange } from './checkYearInRange';

export const checkDateInRange = (
  dateString: string,
  startYear: number,
  endYear: number,
): boolean => {
  if (
    !checkDayInRange(dateString) ||
    !checkMonthInRange(dateString) ||
    !checkYearInRange(dateString, startYear, endYear)
  )
    return false;
  return true;
};
