import { Meta, StoryFn } from '@storybook/react';
import { Calendar } from '@/components/Calendar';
import { CalendarProps } from '@/components/Calendar/types';
import { DEFAULT_END_YEAR, DEFAULT_START_YEAR } from '@/constants';

export default {
  title: 'Calendar',
  component: Calendar,
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
} as Meta<typeof Calendar>;

const Template: StoryFn<CalendarProps> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  startYear: DEFAULT_START_YEAR,
  endYear: DEFAULT_END_YEAR,
  weekStartDay: 'monday',
  withExtraDays: false,
  withWeekends: false,
  withHolidays: false,
};
