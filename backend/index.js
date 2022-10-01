const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

connectToMongo();

app.use(cors);

app.use(express.json());

// Available Routes
// Example of simple route:
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// app.use('/api/wholesaler', require('./routes/wholesaler'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});