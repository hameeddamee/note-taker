const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = require("./config/database");

const app = express();

mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB is Connected"))
  .catch(err => console.log(err));

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("It works");
});

app.listen(1010, function() {
  console.log("Started server on port 1010...");
});
