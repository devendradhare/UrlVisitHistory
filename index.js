const express = require("express");
const path = require("path");
const connectDb = require("./connectDb");

// route and model modules
const urlRouter = require("./routes/urlRoute.js");
const URL = require("./models/url.js");

// Configure dotenv for environment variables
require("dotenv").config();

// middlewares
let useragent = require("express-useragent");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB database
connectDb(process.env.DATABASE_URL)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("mongoDb Error: ", err));

// Set trust proxy for request IP address
app.set("trust proxy", true);

// middlewares
app.use(express.json());
app.use(useragent.express());

app.use("/", urlRouter); // router

// app.get("/", (req, res) => {
//   return res.send("hello from server");
// });

// Start the server
app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`)
);
