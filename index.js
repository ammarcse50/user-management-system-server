const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(express());

app.use(cors());

const users = [
  { id:1, name: "ammar", email: "ammar@gmail.com" },
  { id:2, name: "raihan", email: "raihan@gmail.com" },
  { id:3,name: "adil", email: "adil@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("USER MANAGEMENT SYSTEM IS RUNNING");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`port is running on ${5000}`);
});
