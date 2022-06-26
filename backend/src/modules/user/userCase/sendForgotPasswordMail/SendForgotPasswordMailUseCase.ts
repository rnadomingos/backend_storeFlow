import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { randomBytes } from "crypto";
import { IDateProvider } from "@shared/container/providers/date/IDateProvider";
import auth from "@config/auth";
import { IUserTokenRepository } from "@modules/user/repositories/IUserTokenRepositoryPostgres";
import { IMailProvider } from "@shared/container/providers/mail/IMailProvider";
import { resolve } from "path";


@injectable()
export class SendForgotPasswordMailUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider,
    @inject("UserTokenRepository")
    private userTokenRepository: IUserTokenRepository,
    @inject("GmailProvider")
    private mailProvider: IMailProvider
  ) { }

  async execute(email: string): Promise<void> {

    const user = await this.userRepository.findByEmail(email);


    if (!user) {
      throw new ErrorHandler("Email does not exists");
    }


    const resetToken = randomBytes(20).toString('hex');

    const expires_hours = this.dateProvider.addHours(auth.refresh_token_expires_hours);

    await this.userTokenRepository.create({
      refresh_token: resetToken,
      user_id: user.id,
      expires_token: expires_hours
    })

    const templatePath = resolve(
      __dirname,
      "..",
      "..",
      "views",
      "emails",
      "forgotPassword.hbs"
    );

    const variables = {
      name: user.name,
      link: `${process.env.FORGOT_MAIL_URL_DEV}${resetToken}`,
    }

    await this.mailProvider.sendMail(
      email,
      'Recuperação de senha',
      variables,
      templatePath
    )

  }
}