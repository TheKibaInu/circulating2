const express = require("express");
const cors = require("cors");
const axios = require("axios");
const BigNumber = require("bignumber.js");

const PORT = process.env.PORT || 3000;

const maxFrac = +(process.env.FRAC || 3);

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const request = await axios.get("https://kibainu-eth.vercel.app/");
    res.status(200).json(request.data);
  } catch (e) {
    console.log(e.message);
    res.status(500).end("Server error");
  }
});

app.get("/maxcoins", async (req, res) => {
  try {
    const request = await axios.get("https://kibainu-eth.vercel.app/maxcoins");
    const tempData = new BigNumber(request.data);
    res.status(200).end(tempData.toFixed(maxFrac));
  } catch (e) {
    console.log(e.message);
    res.status(500).end("Server error");
  }
});

app.get("/totalcoins", async (req, res) => {
  try {
    const request = await axios.get(
      "https://kibainu-eth.vercel.app/totalcoins"
    );
    const tempData = new BigNumber(request.data);
    res.status(200).end(tempData.toFixed(maxFrac));
  } catch (e) {
    console.log(e.message);
    res.status(500).end("Server error");
  }
});

app.get("/circulating", async (req, res) => {
  try {
    const request = await axios.get(
      "https://kibainu-eth.vercel.app/circulating"
    );
    const tempData = new BigNumber(request.data);
    res.status(200).end(tempData.toFixed(maxFrac));
  } catch (e) {
    console.log(e.message);
    res.status(500).end("Server error");
  }
});

app.get("/about", async (req, res) => {
  try {
    const request = await axios.get("https://kibainu-eth.vercel.app/about");
    res.status(200).end(request.data);
  } catch (e) {
    console.log(e.message);
    res.status(500).end("Server error");
  }
});

app.use(async (req, res, next) => {
  res.status(404).end("Invalid endpoint");
});

app.listen(PORT, function () {
  console.log(
    "server running on port hurray" + PORT,
    "http://localhost:" + PORT
  );
});
