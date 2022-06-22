import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, {ConnectOptions} from "mongoose";
import cookieParser from "cookie-parser";
import passport from "passport";
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'

dotenv.config()
const app = express()
app.set('port', process.env.PORT || 3000)

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

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


 app.use("/api/post", postRoutes);
 app.use("/api/user", userRoutes);


app.listen(app.get('port'), () => {
  console.log('Server is listening on port', app.get('port'))
})