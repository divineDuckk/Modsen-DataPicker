import { checkDayInRange } from '@/utils/functions';

describe('checkDayInRange', () => {
  it('should return true for a valid day within the month range', () => {
    expect(checkDayInRange('10/08/2023')).toBe(true);
    expect(checkDayInRange('28/02/2024')).toBe(true);
    expect(checkDayInRange('31/12/2023')).toBe(true);
  });

  it('should return false if the day is greater than the number of days in the month', () => {
    expect(checkDayInRange('32/08/2023')).toBe(false);
    expect(checkDayInRange('29/02/2023')).toBe(false);
    expect(checkDayInRange('31/04/2023')).toBe(false);
  });

  it('should return false if the day is less than 1', () => {
    expect(checkDayInRange('00/08/2023')).toBe(false);
    expect(checkDayInRange('-1/08/2023')).toBe(false);
  });

  it('should handle edge cases for months with 30 days', () => {
    expect(checkDayInRange('30/04/2023')).toBe(true);
    expect(checkDayInRange('31/04/2023')).toBe(false);
  });

  it('should handle edge cases for February in non-leap years', () => {
    expect(checkDayInRange('28/02/2023')).toBe(true);
    expect(checkDayInRange('29/02/2023')).toBe(false);
  });

  it('should handle edge cases for February in leap years', () => {
    expect(checkDayInRange('29/02/2024')).toBe(true);
    expect(checkDayInRange('30/02/2024')).toBe(false);
  });
});
