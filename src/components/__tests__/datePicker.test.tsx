import { render, screen, fireEvent } from '@testing-library/react';
import { DatePicker } from '@/components/DatePicker';

describe('DatePicker Component', () => {
  const startYear = 2024;
  const endYear = 2025;
  const weekStartDay = 'monday';
  const withExtraDays = true;
  const withWeekends = true;
  const withHolidays = true;

  it('should add class if day was picked', () => {
    render(
      <DatePicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByText('4'));
    expect(screen.getByText('4')).toHaveClass('datePicker');
  });
  it('should add class if date in input is correct', () => {
    render(
      <DatePicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    const input = screen.getByTestId('date-picker-input');
    fireEvent.change(input, { target: { value: '12/08/2024' } });
    expect(screen.getByText('12')).toHaveClass('datePicker');
  });
  it('should add div with text if date in input is uncorrect', () => {
    render(
      <DatePicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    const input = screen.getByTestId('date-picker-input');
    fireEvent.change(input, { target: { value: '12/08/2099' } });
    expect(screen.getByText('Invalid date!!!')).toBeInTheDocument();
  });
  it('should clear input when press button', () => {
    render(
      <DatePicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    const input: HTMLInputElement = screen.getByTestId('date-picker-input');
    const button = screen.getByTestId('date-picker-clear-btn');
    fireEvent.change(input, { target: { value: '12/08/2024' } });
    fireEvent.click(button);
    expect(input.value).toBe('');
  });
});
