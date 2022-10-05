const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const ProductSchema = new Schema({
  purchase_id: {
    type: Schema.Types.ObjectId,
    ref: 'purchase',
    required: [true, 'Purchase ID is required']
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    article_no: {
        type: String,
        required: [true, 'Article number is required']
    },
    size: {
        type: Number,   
        required: [true, 'Size is required']
    },
    color: {
        type: String
    },
    brand: {
        type: String
    },
    purchase_rate: {
        type: Number,
        required: [true, 'RATE is required']
    },
    selling_rate: {
        type: Number,
        required: [true, 'SELLING RATE is required']
    },
    purchase_quantity: {
        type: Number,
        required: [true, 'Purchase Quantity is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    }
});

const Product = mongoose.model('product',ProductSchema);

module.exports = Product;