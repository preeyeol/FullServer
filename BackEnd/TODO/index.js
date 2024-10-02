require("dotenv").config(".env");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { todoRoute } = require("./Route/todoRoute");
const { userRoute } = require("./Route/userRoute");

const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: "GET,POST",
};
app.use(express.json());
app.use(cors(corsOption));

app.use("/api", todoRoute);
app.use("/api", userRoute);

mongoose
  .connect("mongodb://localhost:27017/ServerToDo")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch(() => {
    console.log("Can't connect to mongoDB");
  });

app.listen(3300, () => {
  console.log("The Server is running on port 3300");
});
