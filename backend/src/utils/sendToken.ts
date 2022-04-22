import auth from "@config/auth";
import { Response } from "express";

interface ISendToken {
  statusCode: number,
  res: Response,
  authenticateToken: {
    user: {
      name: string;
      user_dms: string;
      is_admin: boolean;
    },
    token: string;
  }
}

export function sendToke({ authenticateToken, statusCode, res }: ISendToken) {
  const options = {
    expires: new Date(
      Date.now() + auth.cookie_expires_time * 24 * 60 * 1000
    ),
    httpOnly: true
  }

  res.status(statusCode).cookie('token', authenticateToken.token, options).json({
    success: true,
    authenticateToken
  })
}