import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";
import passport from "passport";
import configurePassport from "./passport/passport-config";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";
import messageRoutes from "./routes/messageRoutes";
import path from "path";

dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, "client/build")));
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
app.use("/api/comment", commentRoutes);
app.use("/api/messages", messageRoutes);

app.use("/uploads", express.static("uploads"));

if(process.env.PRODUCTION_MODE) {
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.all("*", (req: Request, res: Response) => {
  res.status(500);
  res.send("Invalid path");
});

app.listen(app.get("port"), () => {
  console.log("Server is listening on port", app.get("port"));
});
