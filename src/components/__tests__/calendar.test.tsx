import { render, screen, fireEvent } from '@testing-library/react';
import { Calendar } from '@/components/Calendar';

describe('Calendar Component', () => {
  const startYear = 2024;
  const endYear = 2025;
  const weekStartDay = 'monday';
  const withExtraDays = true;
  const withWeekends = true;
  const withHolidays = true;

  it('should display the current month and year', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );

    expect(screen.getByText('August 2024')).toBeInTheDocument();
  });
  it('should change year when click prev', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByTestId('prev'));
    expect(screen.getByText('July 2024')).toBeInTheDocument();
  });
  it('should change year when click next', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByTestId('next'));
    expect(screen.getByText('September 2024')).toBeInTheDocument();
  });
  it('should open the header menu on header click', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByTestId('date-btn'));
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('should change month when month button is clicked', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );

    fireEvent.click(screen.getByTestId('date-btn'));
    fireEvent.click(screen.getByText('January'));
    expect(screen.getByText('January 2024')).toBeInTheDocument();
  });

  it('should open year popup and select a year', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByTestId('date-btn'));
    fireEvent.click(screen.getByText('2024'));
    fireEvent.click(screen.getByText('2025'));
    fireEvent.click(screen.getByText('January'));
    expect(screen.getByText('January 2025')).toBeInTheDocument();
  });

  it('should display holidays correctly', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByTestId('date-btn'));
    fireEvent.click(screen.getByText('August'));
    expect(screen.getByText('3')).toHaveClass('holiday');
  });

  it('should handle extra days correctly', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByTestId('date-btn'));
    fireEvent.click(screen.getByText('August'));
    expect(screen.getByTestId('1-extra-true')).toHaveClass('extraDay');
    expect(screen.getByTestId('29-extra-true')).toHaveClass('extraDay');
  });

  it('should mark weekends correctly', () => {
    render(
      <Calendar
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );
    fireEvent.click(screen.getByTestId('date-btn'));
    fireEvent.click(screen.getByText('August'));
    expect(screen.getByText('3')).toHaveClass('weekend');
    expect(screen.getByText('4')).toHaveClass('weekend');
  });
});
