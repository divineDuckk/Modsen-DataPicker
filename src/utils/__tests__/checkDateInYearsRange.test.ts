import { checkDateInYearsRange } from '@/utils/functions/checkDateInYearsRange';

describe('checkDateInYearsRange', () => {
  it('should return true for a valid date within the year range', () => {
    const result = checkDateInYearsRange('10/08/2023', 2020, 2025);
    expect(result).toBe(true);
  });

  it('should return false if the month is out of range', () => {
    const result = checkDateInYearsRange('10/13/2023', 2020, 2025);
    expect(result).toBe(false);
  });

  it('should return false if the year is before the start year', () => {
    const result = checkDateInYearsRange('10/08/2019', 2020, 2025);
    expect(result).toBe(false);
  });

  it('should return false if the year is after the end year', () => {
    const result = checkDateInYearsRange('10/08/2026', 2020, 2025);
    expect(result).toBe(false);
  });

  it('should return true if the date is exactly on the start year', () => {
    const result = checkDateInYearsRange('01/01/2020', 2020, 2025);
    expect(result).toBe(true);
  });

  it('should return true if the date is exactly on the end year', () => {
    const result = checkDateInYearsRange('31/12/2025', 2020, 2025);
    expect(result).toBe(true);
  });
});
