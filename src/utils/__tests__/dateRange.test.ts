import { dateRange } from '@/utils/functions/dateRange';

describe('dateRange', () => {
  it('should return an array with a single number when start and end are the same', () => {
    expect(dateRange(5, 5)).toEqual([5]);
  });

  it('should return an array with numbers from start to end', () => {
    expect(dateRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if start is greater than end', () => {
    expect(dateRange(5, 1)).toEqual([]);
  });

  it('should handle negative ranges correctly', () => {
    expect(dateRange(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
  });

  it('should return an empty array if both start and end are zero and equal', () => {
    expect(dateRange(0, 0)).toEqual([0]);
  });
});
