const express = require("express");
const URL = require("../models/url.js");

// to generate randome id/short name
const shortid = require("shortid");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    // console.log("req.body: ", req.body);
    return res.json({ msg: "hello form server" });
  })
  .post(async (req, res) => {
    // console.log("req.body: ", req.body);
    // Check if required fields are provided in the request body
    if (!req.body.url || !req.body.name)
      return res.status(400).json({
        error:
          "url and name both are required like this { 'url': 'your url', 'name':'short name for the url'} inside req.body",
      });

    try {
      // Attempt to create a new URL document
      const result = await URL.create({
        // shortId: shortid(),
        shortId: req.body.name,
        redirectURL: req.body.url,
        visitHistory: [],
      });
      return res.json({ msg: "new url added successfully", result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  });
router.route("/:id").get(async (req, res) => {
  try {
    // Getting device information from the useragent
    let deviceInfo = req.useragent;
    console.log("user visited to: ",req.params.id, " from: " deviceInfo.source);

    // Removing unnecessary properties from deviceInfo
    for (let key in deviceInfo) {
      if (deviceInfo[key] === false) delete deviceInfo[key];
    }

    // Getting the IP address from request headers
    let ip =
      req.header("cf-connecting-ip") ||
      req.header("x-real-ip") ||
      req.header("x-forwarded-for") ||
      req.ip;
    deviceInfo.ip = ip + "";

    // Updating visit history for the URL with the new device information
    const resultUrl = await URL.findOneAndUpdate(
      { shortId: req.params.id },
      {
        $push: {
          visitHistory: {
            timestamp: Date(),
            deviceInfo: deviceInfo,
          },
        },
      }
    );

    if (resultUrl) {
      // // // temp return for production only
      return res.status(500).send("successfull");
      // Redirecting to the URL
      return res.redirect(resultUrl.redirectURL);
    } else {
      // Handle the case when no matching URL is found
      return res.status(404).send("Not Found");
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/analytics/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result,
  });
});

router.get("/dvn/allData", async (req, res) => {
  const allUrls = await URL.find({});
  // console.log("allUrls", allUrls);
  return res.status(400).json(allUrls);
});
module.exports = router;
