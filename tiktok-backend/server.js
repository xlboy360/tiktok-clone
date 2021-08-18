import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// DB config
const connection_url =
  "mongodb+srv://admin:vWjhXftmcTThofT0@cluster0.aqh04.mongodb.net/tiktokDB?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello from the backend"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
