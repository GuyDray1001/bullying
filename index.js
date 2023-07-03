const express = require('express');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/analyze', (req, res) => {
  const { conversation } = req.body;
  const sentiment = new Sentiment();
  const result = sentiment.analyze(conversation);
  const isBullying = result.score < 0;

  res.json({ isBullying });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
