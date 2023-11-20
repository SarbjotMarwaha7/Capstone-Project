const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;
