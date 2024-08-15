/* eslint-disable react/display-name */
import { ComponentType, useState } from 'react';

import { CalendarProps } from '@/components/Calendar/types';
import { Calendar } from '@/components/Calendar';
import { PopUp } from '@/components/PopUp';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import { taskPickerService } from './service';
import { TaskMenu } from './TaskMenu';

const withCalendarTaskPicker = (
  WrappedComponents: ComponentType<CalendarProps>,
) => {
  return ({
    endYear,
    startYear,
    weekStartDay,
    withExtraDays,
    withHolidays,
    withWeekends,
  }: CalendarProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handlePickDay = (date: string) => () => {
      taskPickerService.setDate(date);
      setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
      setIsPopupOpen(false);
    };
    return (
      <ErrorBoundary>
        <WrappedComponents
          endYear={endYear}
          startYear={startYear}
          weekStartDay={weekStartDay}
          withExtraDays={withExtraDays}
          withHolidays={withHolidays}
          withWeekends={withWeekends}
          handlePickDay={handlePickDay}
          isNeedToNotify={taskPickerService.isNeedNotify.bind(
            taskPickerService,
          )}
        />
        {isPopupOpen && (
          <PopUp onClose={handlePopupClose} title="Task menu">
            <TaskMenu
              getPickedDate={taskPickerService.getDate.bind(taskPickerService)}
            />
          </PopUp>
        )}
      </ErrorBoundary>
    );
  };
};
export const TaskPicker = withCalendarTaskPicker(Calendar);
