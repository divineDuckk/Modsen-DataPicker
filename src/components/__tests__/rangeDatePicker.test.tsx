import { render, screen, fireEvent } from '@testing-library/react';
import { RangeDatePicker } from '@/components/RangeDatePicker';

describe('RangeDatePicker Component', () => {
  const startYear = 2024;
  const endYear = 2025;
  const weekStartDay = 'monday';
  const withExtraDays = true;
  const withWeekends = true;
  const withHolidays = true;

  it('should add class if last day was picked', () => {
    render(
      <RangeDatePicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('8'));
    expect(screen.getByText('8')).toHaveClass('lastPick');
  });
  it('should add class when days in range', () => {
    render(
      <RangeDatePicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('8'));
    expect(screen.getByText('5')).toHaveClass('inRange');
    expect(screen.getByText('6')).toHaveClass('inRange');
    expect(screen.getByText('7')).toHaveClass('inRange');
  });
  it('should not add class when one of inputs is not has value', () => {
    render(
      <RangeDatePicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.change(screen.getByRole('From'), {
      target: { value: '11/08/2024' },
    });
    expect(screen.getByText('12').classList.contains('inRange')).toBe(false);
    expect(screen.getByText('13').classList.contains('inRange')).toBe(false);
    expect(screen.getByText('14').classList.contains('inRange')).toBe(false);
  });
});
