const express = require("express");
const bodyParser = require("body-parser");
const registerRoute = require("./routes/register");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api", registerRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
