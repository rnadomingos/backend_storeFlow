import auth from "@config/auth";
import { sign } from "jsonwebtoken";

interface IUser {
  id: string
  user_dms: string;
}

export function generateToken({ id, user_dms }: IUser) {

  const token = sign({ user_dms: user_dms }, auth.secret_token, {
    subject: id,
    expiresIn: auth.expires_in_token
  });

  return token
}

export function optionsToCookie() {
  const options = {
    expires: new Date(
      Date.now() + auth.cookie_expires_time * 24 * 60 * 1000
    ),
    httpOnly: true
  }
  return options
}