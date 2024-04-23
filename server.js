const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes/routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(cookieParser());

app.use("/task-api/", routes);
app.use("/", (req, res) => {
  res.send("App is working!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
