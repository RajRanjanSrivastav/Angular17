// const cors = require("cors");
// app.use(bodyParser.json());
// app.use(cors({ origin: "http://localhost:4200" }));
// app.listen(3000, () => {
//   console.log('server is started on port number 3000');
// });

const express = require("express");
const mongoose = require("./db.js");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// creating schema
const addUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // phoneNumber: Number,
  // gender: String,
  // address: String,
});

const addUser = new mongoose.model("addUser", addUserSchema);

// for create new one
app.post("/api/v1/adduser/new", async (req, res) => {
  const user = await addUser.create(req.body);

  res.status(200).json({
    success: true,
    user,
  });
});

// for get all user
app.get("/api/v1/getuser", async (req, res) => {
  const user = await addUser.find();

  res.status(200).json({
    success: true,
    user,
  });
});

// for update the user
app.put("/api/v1/updateUser/:id", async (req, res) => {
  let user = await addUser.findById(req.params.id);

  if (!user) {
    return res.status(500).json({
      success: false,
      message:"user is not found",
    });
  }
  user = await addUser.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// for delete
app.delete("/api/v1/removeUser/:id", async (req, res) => {
  let user = await addUser.findById(req.params.id);
  
  console.log(user);
  
  if (!user) {
    return res.status(500).json({
      success: false,
      message:"user is not found",
    });
  }
  
  user = await addUser.findOneAndDelete({_id:req.params.id});
  // await user.remove();

  res.status(200).json({
    success: true,
    message:"user is deleted successfully",
  });
});

app.listen(4500, () => {
  console.log("server is working at http://localhost:4500");
});
