import { Dispatch, SetStateAction } from 'react';

export interface DateInputProps {
  dateValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  title: string;
  startYear: number;
  endYear: number;
  setServiceValue: (value: string) => void;
  getServiceValue: () => string;
}
