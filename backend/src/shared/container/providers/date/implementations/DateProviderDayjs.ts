import dayjs from "dayjs";
import { IDateProvider } from "../IDateProvider";

export class DateProviderDayjs implements IDateProvider {
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