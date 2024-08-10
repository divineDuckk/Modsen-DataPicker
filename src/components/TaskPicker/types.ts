import { Task } from '@/interfaces';

export interface Tasks {
  [key: string]: Task[];
}
export interface TaskPickerProps {
  isNeedToNotify?: (date: string) => boolean;
}
