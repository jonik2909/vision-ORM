const con = require("./server");
const express = require("express");
const app = express();
const Task = require("./entity/Task");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.get("/", async (req, res) => {
  try {
    const taskRepository = con.getRepository(Task);
    const tasks = await taskRepository.find();

    res.status(200).json(tasks);
  } catch (err) {
    console.log("Error, /", err);
    res.end("something went wrong");
  }
});

module.exports = app;
