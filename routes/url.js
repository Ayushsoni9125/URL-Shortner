const express = require('express');
const {handleGenerateNewShortUrl} = require('../controllers/url');
const {handlegetAnalytics} = require('../controllers/url');
const router = express.Router()


router.post('/', handleGenerateNewShortUrl);

router.get('/analytics/:shortId', handlegetAnalytics)

module.exports = router;