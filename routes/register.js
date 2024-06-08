// routes/register.js

const express = require("express");
const axios = require("axios");
const config = require("../config/config");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { companyName, ownerName, rollNo, ownerEmail } = req.body;

  try {
    const response = await axios.post(config.registerUrl, {
      companyName,
      ownerName,
      rollNo,
      ownerEmail,
      accessCode: config.accessCode,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
});

module.exports = router;
