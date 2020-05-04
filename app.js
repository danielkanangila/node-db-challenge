const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./errors/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", routes);
app.use(errorHandler);

module.exports = app;
