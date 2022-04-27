export interface IDateProvider {
  addDays(days: number): Date;
  addHours(hours: number): Date;
  dateNow(): Date;
  compareIfBefore(start_date: Date, end_date: Date): boolean;

}