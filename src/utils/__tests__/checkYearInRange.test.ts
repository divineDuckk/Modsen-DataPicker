import { checkYearInRange } from '@/utils/functions/checkYearInRange';

describe('checkYearInRange', () => {
  it('should return true for a valid year within the range', () => {
    expect(checkYearInRange('10/08/2023', 2020, 2025)).toBe(true);
  });

  it('should return false if the year is greater than the endYear', () => {
    expect(checkYearInRange('10/08/2026', 2020, 2025)).toBe(false);
  });

  it('should return false if the year is less than the startYear', () => {
    expect(checkYearInRange('10/08/2019', 2020, 2025)).toBe(false);
  });

  it('should handle edge cases with boundary values', () => {
    expect(checkYearInRange('10/08/2020', 2020, 2025)).toBe(true);
    expect(checkYearInRange('10/08/2025', 2020, 2025)).toBe(true);
  });
});
