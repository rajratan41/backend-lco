const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from Backend</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instasocial = {
    username: "rajratan41",
    followers: 42,
    follows: 12,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instasocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebooksocial = {
    username: "rajratan",
    followers: 94,
    follows: 122,
    date: format.asString("dd [MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(facebooksocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinsocial = {
    username: "rajratan",
    connections: 400,
    followes: 200,
    date: format.asString("dd [MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedinsocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);

  res.status(200).json({ params: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
