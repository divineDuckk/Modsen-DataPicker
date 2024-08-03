import { Meta, StoryFn } from '@storybook/react';
import { Calendar } from '@/components/Calendar';
import { CalendarProps } from '@/components/Calendar/types';

export default {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Calendar>;

const Template: StoryFn<CalendarProps> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  startYear: 2003,
  endYear: 2030,
  weekStartDay: 'monday',
};
