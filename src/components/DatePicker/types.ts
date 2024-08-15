export interface DatePickerProps {
  handlePickDay?: (fullDate: string) => () => void;
  startDate?: string;
}
