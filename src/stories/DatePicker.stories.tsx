import { Meta, StoryFn } from '@storybook/react';
import { CalendarProps } from '@/components/Calendar/types';
import { DEFAULT_END_YEAR, DEFAULT_START_YEAR } from '@/constants';
import { DatePicker } from '@/components/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startYear: {
      control: {
        type: 'range',
        min: DEFAULT_START_YEAR,
        max: DEFAULT_END_YEAR,
      },
      defaultValue: DEFAULT_START_YEAR,
    },
    endYear: {
      control: {
        type: 'range',
        min: DEFAULT_START_YEAR,
        max: DEFAULT_END_YEAR,
      },
      defaultValue: DEFAULT_END_YEAR,
    },
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<CalendarProps> = args => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  startYear: DEFAULT_START_YEAR,
  endYear: DEFAULT_END_YEAR,
  weekStartDay: 'monday',
  withExtraDays: false,
  withWeekends: false,
  withHolidays: false,
};
