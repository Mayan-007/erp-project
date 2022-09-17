const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StockSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: [true, 'Product ID is required']
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