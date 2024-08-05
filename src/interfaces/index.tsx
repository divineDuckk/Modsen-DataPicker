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
