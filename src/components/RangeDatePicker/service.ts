class RangeDatePickerService {
  private dateInterval = { startDate: '', endDate: '' };
  constructor() {}
  getStartDate() {
    return this.dateInterval.startDate;
  }
  getEndDate() {
    return this.dateInterval.endDate;
  }
  setStartDate(value: string) {
    this.dateInterval.startDate = value;
  }
  setEndDate(value: string) {
    this.dateInterval.endDate = value;
  }
  chooseToSetDate(date: string) {
    if (!this.dateInterval.startDate && !this.dateInterval.endDate) {
      this.setStartDate(date);
    } else if (this.dateInterval.startDate && !this.dateInterval.endDate) {
      this.setEndDate(date);
    } else if (!this.dateInterval.startDate && this.dateInterval.endDate) {
      this.setStartDate(date);
    } else if (this.dateInterval.startDate && this.dateInterval.endDate) {
      this.setStartDate(date);
      this.setEndDate('');
    }
  }
}
export const rangeDatePickerService = new RangeDatePickerService();
