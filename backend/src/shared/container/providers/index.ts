import { container } from "tsyringe";
import { IDateProvider } from "./date/IDateProvider";
import { DateProviderDayjs } from "./date/implementations/DateProviderDayjs";
import { IMailProvider } from "./mail/IMailProvider";
import { EtherealMailProvider } from "./mail/implementations/EtherealMailProvider";


container.registerSingleton<IDateProvider>(
  "DateProvider",
  DateProviderDayjs
)

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
)