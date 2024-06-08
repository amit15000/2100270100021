// server.js

const express = require("express");
const bodyParser = require("body-parser");
const registerRoute = require("./routes/register");
const authRoute = require("./routes/auth");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api", registerRoute);
app.use("/api", authRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
