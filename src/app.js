import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dataLimit } from "./constants";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: dataLimit }));
app.use(express.urlencoded({ limit: dataLimit }));
app.use(express.static("public"));

export default app;
