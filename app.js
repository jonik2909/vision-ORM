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

const taskRepository = con.getRepository(Task);

app.post("/create-item", async (req, res) => {
  try {
    console.log("/create-item");
    const { visionName } = req.body;

    const result = await taskRepository.save({ visionName: visionName });
    console.log("result:", result);

    res.json(result);
  } catch (err) {
    console.log("Error, /create-item:", err);
    res.end("something went wrong");
  }
});

app.get("/", async (req, res) => {
  try {
    console.log("/");

    const result = await taskRepository.find();
    console.log("result:", result);

    res.render("list", { items: result });
  } catch (err) {
    console.log("Error, /", err);
    res.end("something went wrong");
  }
});

module.exports = app;
