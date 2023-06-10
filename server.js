const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require('cors');
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path = require("path");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));

const whiteList = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://testt-orpin.vercel.app",
  "https://earlyoffice-demo.herokuapp.com",
  "https://early.vercel.app"
];

const corsOptions = {
  origin: whiteList,
  credentials: true
};

app.options("*", cors(corsOptions)); // Enable preflight requests for all routes
app.use(cors(corsOptions)); // Enable CORS for all routes

app.listen(port, () => console.log(`Express server started at ${port}!`));
