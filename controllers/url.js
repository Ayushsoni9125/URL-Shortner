const { nanoid } = require("nanoid");
const Url = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const { url } = req.body;

  // ✅ proper validation
  if (!url) {
    return res.status(400).send("URL is required");
  }

  const shortId = nanoid(8);

  await Url.create({
    shortId,
    redirectUrl: url,
    visitHistory: [],
  });

  // ✅ IMPORTANT: fetch all URLs for home.ejs
  const allURLs = await Url.find({});

  // ✅ ALWAYS send urls
  return res.render("home", {
    shortUrl: shortId,
    urls: allURLs,
  });
}

async function handlegetAnalytics(req, res) {
  const { shortId } = req.params;

  const result = await Url.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ error: "URL not found" });
  }

  return res.json({
    totalclicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handlegetAnalytics,
};
