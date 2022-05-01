import dayjs from "dayjs";
import { IDateProvider } from "../IDateProvider";

export class DateProviderDayjs implements IDateProvider {
  compareIfBefore(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }
  addDays(days: number): Date {
    return dayjs().add(days, 'day').toDate()
  }
  addHours(hours: number): Date {
    return dayjs().add(hours, 'hour').toDate()
  }
  dateNow(): Date {
    return dayjs().toDate()
  }

}