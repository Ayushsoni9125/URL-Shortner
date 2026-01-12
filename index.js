const express = require('express');
const urlRoute = require('./routes/url');
const {ConnecttoMongoDB } = require('./connect');
const URL = require('./models/url');
const path = require('path');
const app = express();
const staticRoute = require('./routes/staticRouter');

app.use(express.json());
app.use(express.urlencoded({extended: false}));



ConnecttoMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log('Mongodb connected'))

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use('/url', urlRoute);

app.get('/', async (req, res) => {
  const allURLS = await URL.find({});
  return res.render('home', {
    urls: allURLS,
  });
});


app.use('/', staticRoute);

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true } // optional but good
  );

  // ✅ FIX: handle null case
  if (!entry) {
    return res.status(404).send('Short URL not found');
  }

  return res.redirect(entry.redirectUrl);
});




app.listen(3008 ,()=>{
  console.log(`Server is runnning on the port 3008 `);
})
