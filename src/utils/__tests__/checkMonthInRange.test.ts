import { MAX_MONTH_PER_YEAR } from '@/constants';
import { checkMonthInRange } from '@/utils/functions/checkMonthInRange';

describe('checkMonthInRange', () => {
  it('should return true for a valid month within the range', () => {
    expect(checkMonthInRange('10/08/2023')).toBe(true);
    expect(checkMonthInRange('01/01/2023')).toBe(true);
    expect(checkMonthInRange(`31/${MAX_MONTH_PER_YEAR}/2023`)).toBe(true);
  });

  it('should return false if the month is greater than MAX_MONTH_PER_YEAR', () => {
    const invalidMonth = MAX_MONTH_PER_YEAR + 1;
    expect(checkMonthInRange(`10/${invalidMonth}/2023`)).toBe(false);
  });

  it('should return false if the month is less than 1', () => {
    expect(checkMonthInRange('10/00/2023')).toBe(false);
  });

  it('should handle edge cases with boundary values', () => {
    expect(checkMonthInRange(`10/${MAX_MONTH_PER_YEAR}/2023`)).toBe(true);
    expect(checkMonthInRange('10/01/2023')).toBe(true);
  });
});
