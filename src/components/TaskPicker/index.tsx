/* eslint-disable react/display-name */
import { ComponentType, useState } from 'react';

import { CalendarProps } from '@/components/Calendar/types';
import { Calendar } from '@/components/Calendar';
import { PopUp } from '@/components/PopUp';

import { taskPickerService } from './service';
import { TaskMenu } from './TaskMenu';

const withCalendarTaskPicker = <P extends CalendarProps>(
  WrappedComponents: ComponentType<P>,
) => {
  return (props: P) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handlePickDay = (date: string) => () => {
      taskPickerService.setDate(date);
      setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
      setIsPopupOpen(false);
    };
    return (
      <>
        <WrappedComponents {...props} handlePickDay={handlePickDay} />
        {isPopupOpen && (
          <PopUp onClose={handlePopupClose} title="Task menu">
            <TaskMenu
              getPickedDate={taskPickerService.getDate.bind(taskPickerService)}
            />
          </PopUp>
        )}
      </>
    );
  };
};
export const TaskPicker = withCalendarTaskPicker(Calendar);
