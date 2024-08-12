import { Meta, StoryFn } from '@storybook/react';
import { CalendarProps } from '@/components/Calendar/types';
import { TaskPicker } from '@/components/TaskPicker';

export default {
  title: 'TaskPicker',
  component: TaskPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startDate: {
      table: {
        disable: true,
      },
    },
    endDate: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof TaskPicker>;

const Template: StoryFn<CalendarProps> = args => <TaskPicker {...args} />;
export const Default = Template.bind({});
Default.args = {
  weekStartDay: 'monday',
  withExtraDays: false,
  withWeekends: false,
  withHolidays: false,
  startYear: 2000,
  endYear: 2080,
};
