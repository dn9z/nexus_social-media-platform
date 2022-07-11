import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";
import passport from "passport";
import configurePassport from "./passport/passport-config";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import messageRoutes from "./routes/messageRoutes";

import {fileURLToPath} from 'url';
import { dirname } from 'path';
import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// console.log("filename is", __filename);
// const __dirname = dirname(__filename);
// console.log("directoryname is", __dirname);

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

//initialize passport
app.use(cookieParser());
app.use(passport.initialize());
configurePassport(passport);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions // needs to be added for typescript
  )
  .then(() => {
    console.log("we are connected to the database.");
  })
  .catch((error) => {
    console.log("an error occurred while connecting to the db", error);
  });

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/messages", messageRoutes)

app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "client/build")));
// * is the wildcard, anything else that's no matching a route above this.



app.use("/uploads", express.static("uploads"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.all("*", (req, res) => {
  res.status(500);
  res.send("Invalid path");
});

app.listen(app.get("port"), () => {
  console.log("Server is listening on port", app.get("port"));
});