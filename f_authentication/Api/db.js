const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
