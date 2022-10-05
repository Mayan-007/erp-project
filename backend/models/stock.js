const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StockSchema = new Schema({
    article_no: {
        type: String,
        ref: 'product',
        required: [true, 'Article No is required']
    },
    size: {
        type: Number,
        required: [true, 'Size is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    }
});

const Stock = mongoose.model('stock',StockSchema);

module.exports = Stock;