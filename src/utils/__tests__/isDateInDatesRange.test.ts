import { isDateInRange } from '@/utils/functions/isDateInDatesRange';

describe('isDateInRange', () => {
  it('should return true for a date within the range', () => {
    const currentDate = '15/08/2024';
    const startDate = '01/08/2024';
    const endDate = '31/08/2024';

    expect(isDateInRange(currentDate, startDate, endDate)).toBe(true);
  });

  it('should return false for a date before the range', () => {
    const currentDate = '25/07/2024';
    const startDate = '01/08/2024';
    const endDate = '31/08/2024';

    expect(isDateInRange(currentDate, startDate, endDate)).toBe(false);
  });

  it('should return false for a date after the range', () => {
    const currentDate = '05/09/2024';
    const startDate = '01/08/2024';
    const endDate = '31/08/2024';

    expect(isDateInRange(currentDate, startDate, endDate)).toBe(false);
  });

  it('should return true for a date at the start of the range', () => {
    const currentDate = '01/08/2024';
    const startDate = '01/08/2024';
    const endDate = '31/08/2024';

    expect(isDateInRange(currentDate, startDate, endDate)).toBe(true);
  });

  it('should return true for a date at the end of the range', () => {
    const currentDate = '31/08/2024';
    const startDate = '01/08/2024';
    const endDate = '31/08/2024';

    expect(isDateInRange(currentDate, startDate, endDate)).toBe(true);
  });
});
