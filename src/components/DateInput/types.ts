import { ChangeEvent } from 'react';

export interface DateInputProps {
  dateValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  isInputError: boolean;
  handleClear: () => void;
}
