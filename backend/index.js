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
app.use('/api/invoice', require('./routes/invoice'))
app.use('/api/stock', require('./routes/stock'))
app.use('/api/customer', require('./routes/customer'))
app.use('/api/product', require('./routes/product'))
app.use('/api/sales', require('./routes/sales'))
app.use('/api/staticfinance', require('./routes/staticfinance'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});