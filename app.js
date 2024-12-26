const express = require("express");
const connectDB = require("./database/db");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const bodyParser = require("body-parser");
const cors = require("cors");
// create our express app
const app = express();
//Mongodb connection
connectDB();

app.use(cors());

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route
const routes = require("./Routes/Route");
app.use("/", routes);

//start server
app.listen(5000, () => {
  console.log("listeniing at port:5000");
});
