import { container } from "tsyringe";
import { IDateProvider } from "./date/IDateProvider";
import { DateProviderDayjs } from "./date/implementations/DateProviderDayjs";


container.registerSingleton<IDateProvider>(
  "DateProvider",
  DateProviderDayjs
)