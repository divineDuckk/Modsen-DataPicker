import { Meta, StoryFn } from '@storybook/react';
import { CalendarProps } from '@/components/Calendar/types';
import { DatePicker } from '@/components/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startDate: {
      control: 'text',
    },
    endDate: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<CalendarProps> = args => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  weekStartDay: 'monday',
  withExtraDays: false,
  withWeekends: false,
  withHolidays: false,
  startYear: 2000,
  endYear: 2080,
};
