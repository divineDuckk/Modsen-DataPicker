import { Task } from '@/interfaces';

export type Tasks = Record<string, Task[]>;
export interface TaskPickerProps {
  isNeedToNotify?: (date: string) => boolean;
}
