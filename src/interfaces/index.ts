export type startDay = 'monday' | 'sunday';

export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: [
    {
      language: string;
      text: string;
    },
  ];
  nationwide: true;
}

export interface Day {
  fullDate: string;
  day: string;
  extraDay: boolean;
  isWeekend: boolean;
  isHoliday: boolean;
}
export interface Task {
  date: string;
  title: string;
  description: string;
}
