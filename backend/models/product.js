const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const ProductSchema = new Schema({
  purchase_id: {
    type: Schema.Types.ObjectId,
    ref: 'purchase',
    required: [true, 'Purchase ID is required']
    },
    products:[{
    article_no: {
        type: String,
        required: [true, 'Article number is required']
    },
    size: {
        type: Number,   
        required: [true, 'Size is required']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    purchase_rate: {
        type: Number,
        required: [true, 'RATE is required']
    },
    purchase_quantity: {
        type: Number,
        required: [true, 'Purchase Quantity is required']
    }}],
    date: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('product',ProductSchema);

module.exports = Product;