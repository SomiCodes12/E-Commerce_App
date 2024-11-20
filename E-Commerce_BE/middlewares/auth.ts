import jwt, { JwtPayload } from "jsonwebtoken";
import { userModel } from "../models/user";
import ErrorHandler from "../utils/errorHandler";

export const isAuthenticated = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token)
    return next(new ErrorHandler("Please log in to access this resource", 401));

  try {
    const mainToken = token.split(" ")[1];
    console.log(mainToken);
    const decoded = jwt.verify(mainToken, process.env.JWT_SECRET_KEY!);
    console.log("decoded", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    next(new ErrorHandler("Invalid or expired token", 401));
  }
};
