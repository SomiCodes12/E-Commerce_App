import { Response } from "express";

export const sendToken = (user: any, statusCode: number, res: Response) => {
  const token = user.getjwtToken();

  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
