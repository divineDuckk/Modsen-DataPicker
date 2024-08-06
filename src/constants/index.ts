import { Holiday } from '@/interfaces';

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const WEEKS_START_WITH_MONDAY = [
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa',
  'Su',
];
export const WEEKS_START_WITH_SUNDAY = [
  'Su',
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa',
];

export const MAX_DAYS_PER_WEEK = 7;

export const MOCKED_HOLYDAYS: Holiday[] = [
  {
    id: '6c4a1714-9a09-4a2a-98c9-2c84161eb94c',
    startDate: '2024-01-01',
    endDate: '2024-01-02',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'Новый год',
      },
    ],
    nationwide: true,
  },
  {
    id: '73f0c14c-856a-477e-a96a-f3a3e734dadc',
    startDate: '2024-01-07',
    endDate: '2024-01-07',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'Православное Рождество',
      },
    ],
    nationwide: true,
  },
  {
    id: '1eddf983-c6f9-4b93-a319-ee25ba809ac9',
    startDate: '2024-03-08',
    endDate: '2024-03-08',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'День женщин',
      },
    ],
    nationwide: true,
  },
  {
    id: 'd2f90e16-334f-438a-b07e-3187332b628e',
    startDate: '2024-05-01',
    endDate: '2024-05-01',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'Праздник труда',
      },
    ],
    nationwide: true,
  },
  {
    id: '222fc9bb-228f-4115-be5d-89aa26f03111',
    startDate: '2024-05-09',
    endDate: '2024-05-09',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'День Победы',
      },
    ],
    nationwide: true,
  },
  {
    id: '347538fa-3fbf-4b07-badd-bb1272311e01',
    startDate: '2024-05-14',
    endDate: '2024-05-14',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'Радуница',
      },
    ],
    nationwide: true,
  },
  {
    id: '9f5e30cd-ebf4-4f20-ad15-b1ff948cb414',
    startDate: '2024-07-03',
    endDate: '2024-07-03',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'День Республики',
      },
    ],
    nationwide: true,
  },
  {
    id: '6d8498b9-b9ec-41a4-811c-d712effaa06b',
    startDate: '2024-11-07',
    endDate: '2024-11-07',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'День Октябрьской революции',
      },
    ],
    nationwide: true,
  },
  {
    id: '0e49a774-e9a5-4b73-80db-a5336ad501da',
    startDate: '2024-12-25',
    endDate: '2024-12-25',
    type: 'Public',
    name: [
      {
        language: 'RU',
        text: 'Католическое Рождество',
      },
    ],
    nationwide: true,
  },
];
