import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorMiddleware from "./middlewares/error";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());

app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(fileupload({useTempFiles : true}))

// app.use("/", express.static("uploads"))

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "BE_2/config/.env",
  });
}

app.use(errorMiddleware);
export default app;
