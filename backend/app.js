const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/data');
console.log(data)
const port = 5000;

app.use(cors())
app.use(express.json());         // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/products', (req, res) => {
    res.header("Content-Type", "application/json");
    res.status(200).json(data);
    res.status(404).send('Not found');
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});