import { render, screen, fireEvent } from '@testing-library/react';
import { TaskPicker } from '@/components/TaskPicker';

describe('TaskPicker Component', () => {
  const startYear = 2024;
  const endYear = 2025;
  const weekStartDay = 'monday';
  const withExtraDays = true;
  const withWeekends = true;
  const withHolidays = true;

  it('should add task and display it when viewing tasks', () => {
    const { container } = render(
      <TaskPicker
        startYear={startYear}
        endYear={endYear}
        weekStartDay={weekStartDay}
        withExtraDays={withExtraDays}
        withWeekends={withWeekends}
        withHolidays={withHolidays}
      />,
    );

    fireEvent.click(screen.getByText('4'));

    fireEvent.change(screen.getByTestId('task-menu-input'), {
      target: { value: 'Test task' },
    });

    fireEvent.change(screen.getByTestId('task-menu-textarea'), {
      target: { value: 'test' },
    });

    fireEvent.click(screen.getByTestId('task-menu-add-task'));
    fireEvent.click(screen.getByTestId('task-menu-view-tasks'));
    const olElement = container.querySelector('ol');
    expect(olElement).toBeInTheDocument();
  });
});
