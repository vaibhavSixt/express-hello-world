const express = require("express");

const app = express();
const port = process.env.PORT || 3001;


app.get("/", (_, res) => {
 const App = require('./component/dashboard').default;
  const html = <App />;
  res.type('html').send(html);
});

app.get("/addfood", (_, res) => {
  res.send("Add Food Route");
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

