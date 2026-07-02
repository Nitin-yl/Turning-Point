const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/create", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById({
      _id: decoded.id,
    });
    console.log(user);
  } catch (err) {
    res.status(401).json({
      message: "token is invalid",
    });
  }

  res.send("post created successfully");
});

module.exports = router;
