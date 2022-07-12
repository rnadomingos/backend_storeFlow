import * as dotenv from "dotenv"
import { injectable } from "tsyringe"
import { IMailProvider } from "../IMailProvider"
import nodemailer, { Transporter } from "nodemailer"
import Handlebars from "handlebars";
import fs from "fs";

@injectable()
export class GmailProvider implements IMailProvider {

  private client: Transporter

  constructor() {
    dotenv.config()
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      },
    });
    this.client = transporter;
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {

    const templateFileContent = fs.readFileSync(path).toString("utf-8");
    const templateParse = Handlebars.compile(templateFileContent);

    const templateHTML = templateParse(variables);

    await this.client.sendMail({
      to,
      from: "GB <noreplay@gb.com.br>",
      subject,
      html: templateHTML
    })

  }
}
