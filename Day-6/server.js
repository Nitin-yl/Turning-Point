require("dotenv").config();
const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to Database");
  });
}

connectToDb();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
