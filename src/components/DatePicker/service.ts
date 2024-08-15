class DatePickerService {
  private dateValue = '';
  constructor() {}
  getDateValue() {
    return this.dateValue;
  }
  setDateValue(value: string) {
    this.dateValue = value;
  }
}
export const datePickerService = new DatePickerService();
