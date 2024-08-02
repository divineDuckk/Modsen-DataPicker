import { Meta, StoryFn } from '@storybook/react';
import { Calendar } from '@/components/Calendar';
import { CalendarProps } from '@/components/Calendar/types';

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta<typeof Calendar>;

const Template: StoryFn<CalendarProps> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello world',
};
