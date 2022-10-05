const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/wholesaler', require('./routes/wholesaler'))
app.use('/api/employee', require('./routes/employee'))
app.use('/api/purchase', require('./routes/purchase'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});