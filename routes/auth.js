// routes/auth.js

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/auth", async (req, res) => {
  const { companyName, clientID, clientSecret, ownerName, ownerEmail, rollNo } =
    req.body;

  try {
    const response = await axios.post("http://20.244.56.144/test/auth", {
      companyName,
      clientID,
      clientSecret,
      ownerName,
      ownerEmail,
      rollNo,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Authorization failed" });
  }
});

module.exports = router;
