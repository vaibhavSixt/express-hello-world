const express = require("express");
const dashboard=require('./component/dashboard');

const app = express();
const port = process.env.PORT || 3001;


app.get("/", (_, res) => {
  res.type('html').send(dashboard);
});

app.get("/addfood", (_, res) => {
  res.send("Add Food Route");
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

