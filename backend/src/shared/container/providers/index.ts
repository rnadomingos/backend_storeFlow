import { container } from "tsyringe";
import { IDateProvider } from "./date/IDateProvider";
import { DateProviderDayjs } from "./date/implementations/DateProviderDayjs";
import { IMailProvider } from "./mail/IMailProvider";
import { EtherealMailProvider } from "./mail/implementations/EtherealMailProvider";
import { GmailProvider } from "./mail/implementations/GmailProvider";
import { IEmailValidator } from "./validators/IEmailValidator";
import { EmailValidator } from "./validators/implementations/EmailValidator";



container.registerInstance<IDateProvider>(
  "DateProvider",
  new DateProviderDayjs()
)

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
)

container.registerInstance<IMailProvider>(
  "GmailProvider",
  new GmailProvider()
)

container.registerInstance<IEmailValidator>(
  "EmailValidator",
  new EmailValidator()
)
