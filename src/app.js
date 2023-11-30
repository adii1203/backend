import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dataLimit } from "./constants.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: dataLimit }));
app.use(express.urlencoded({ limit: dataLimit, extended: true }));
app.use(express.static("public"));

export default app;
