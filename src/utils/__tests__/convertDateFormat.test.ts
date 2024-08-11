import { convertDateFormat } from '@/utils/functions';

describe('convertDateFormat', () => {
  it('should return undefined if dateString is undefined', () => {
    expect(convertDateFormat(undefined)).toBeUndefined();
  });

  it('should return formatted date for a valid date string', () => {
    expect(convertDateFormat('10/08/2023')).toBe('August 2023');
    expect(convertDateFormat('01/01/2022')).toBe('January 2022');
  });

  it('should return undefined if the date string is invalid', () => {
    expect(convertDateFormat('31/02/2023')).toBeUndefined();
    expect(convertDateFormat('99/99/9999')).toBeUndefined();
  });

  it('should handle edge cases for valid dates', () => {
    expect(convertDateFormat('29/02/2024')).toBe('February 2024');
    expect(convertDateFormat('31/01/2023')).toBe('January 2023');
  });
});
