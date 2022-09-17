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
    rate: {
        type: Number,
        required: [true, 'RATE is required']
    },
    cgst: {
        type: Number,
        required: [true, 'CGST is required']
    },
    sgst: {
        type: Number,
        required: [true, 'SGST is required']
    }
});

const Product = mongoose.model('product',ProductSchema);

module.exports = Product;