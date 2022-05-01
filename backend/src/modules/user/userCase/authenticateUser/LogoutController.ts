import { Request, Response } from "express";

export class LogoutController {
  async handle(req: Request, res: Response): Promise<Response> {
    res.cookie('token', null, {
      expires: new Date(Date.now()),
      httpOnly: true
    })

    return res.status(200).json({
      success: true,
      message: 'logged out'
    })
  }
}