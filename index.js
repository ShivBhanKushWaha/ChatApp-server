import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDbURI;

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoute);

mongoose
  .connect(URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error while connecting to the database", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});