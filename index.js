import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import propertiesRoutes from "./routes/properties.js";
import ExpressError from "./utils/ExpressError.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/properties", propertiesRoutes);

const CONNECTION_URL =
  "mongodb+srv://admin:BMG9SgcsjbqsD9ul@cluster0.n0kxzty.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));

app.all("*", (req, res, next) => {
  next(new ExpressError("Page not Found!", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Oh No, Somthing went wrong!" } = err;
  if (!err.message) {
    err.message = "Oh No, Somthing went wrong!";
  }
  res.status(statusCode).json({ message: err.message });
});
