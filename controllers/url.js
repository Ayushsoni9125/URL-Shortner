const { nanoid } = require('nanoid')
const url = require('../models/url')

async function  handleGenerateNewShortUrl(req,res){
  const body = req.body;
  if(!body){
    return res.status(400).json({error: 'url is required'});
  }
   const shortId = nanoid(8);
   await url.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
   })

   return res.json({id: shortId});
}

async function handlegetAnalytics(req,res){
  const shortId = req.params.shortId;
  const result = await url.findOne({ shortId });
  return res.json({totalclicks: result.visitHistory.length,
     analytics: result.visitHistory,
    })
}


module.exports = {
  handleGenerateNewShortUrl,
  handlegetAnalytics,
}