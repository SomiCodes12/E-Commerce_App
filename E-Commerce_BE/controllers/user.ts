import jwt from "jsonwebtoken";
import { sendMail } from "../utils/email";
import dotenv from "dotenv";
import { userModel } from "../models/user";
import path from "path";
import { sendToken } from "../utils/jwtToken";
import bcrypt from "bcryptjs";
import catchAsyncError from "../middlewares/catchAsyncError";
import ErrorHandler from "../utils/errorHandler";

dotenv.config();

export const createUser = async (req: any, res: any, next: any) => {
  try {
    const { name, email, password } = req.body;

    if (await userModel.findOne({ email })) {
      return res.status(400).json({ message: "User already exists" });
    }

    const filename = req.file?.filename ?? "";
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      avatar: filename,
      isVerified: false,
    });

    const verificationToken = jwt.sign(
      { id: user._id },
      process.env.ACTIVATION_TOKEN!,
      { expiresIn: "15m" }
    );
    const activationURL = `http://localhost:5173/verify/${verificationToken}`;

    await sendMail({
      email,
      subject: "Activate your account",
      message: `Hello ${name}, please click the following link to verify your account: ${activationURL}`,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Please check your email to verify your account",
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

export const viewUsers = async (req: any, res: any) => {
  try {
    const user = await userModel.find();
    return res.status(200).json({
      messagae: "Viewed user succesfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      messagae: "Error viewing user",
      data: error.messagae,
    });
  }
};

export const activateAccounts = async (req: any, res: any, next: any) => {
  try {
    const { verificationToken } = req.body;
    const decoded = jwt.verify(
      verificationToken,
      process.env.ACTIVATION_TOKEN!
    ) as { id: string };

    const user = await userModel.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "Invalid token" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    user.isVerified = true;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Account activated successfully" });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(400).json({
        message: "Token expired, please request a new activation link",
      });
    }
    next(new ErrorHandler("Error activating account", 500));
  }
};

export const loginUser = async (req: any, res: any, next: any) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    sendToken(user, 200, res);
    console.log(user);

  } catch (error) {
    next(new ErrorHandler("Error logging in", 500));
  }
};

export const getUser = catchAsyncError(
  async (req: any, res: any, next: any) => {
    const user = await userModel.findById(req.user.id);

    if (!user) return next(new ErrorHandler("User not found", 404));

    res.status(200).json({ success: true, user });
  }
);


export const deleteAccount = async (req : any , res : any) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}