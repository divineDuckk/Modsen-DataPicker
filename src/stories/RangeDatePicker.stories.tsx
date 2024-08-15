import { Meta, StoryFn } from '@storybook/react';
import { CalendarProps } from '@/components/Calendar/types';
import { RangeDatePicker } from '@/components/RangeDatePicker';

export default {
  title: 'RangeDatePicker',
  component: RangeDatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startDate: {
      control: 'text',
    },
    endDate: {
      control: 'text',
    },
  },
} as Meta<typeof RangeDatePicker>;

const Template: StoryFn<CalendarProps> = args => <RangeDatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  weekStartDay: 'monday',
  withExtraDays: false,
  withWeekends: false,
  withHolidays: false,
  startYear: 2000,
  endYear: 2080,
};
