const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://Nitin:Pg01L2MBVy5kXQwR@yt-backend.c7yuyqm.mongodb.net/halley",
  );

  console.log("MongoDB connected");
}

module.exports = connectDB;
