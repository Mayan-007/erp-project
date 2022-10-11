const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const InvoiceSchema = new Schema({
   products: [{
            brand: {
                type: String,
                required: [true, 'brand is required']
            },
            article_no: {
                type: String,
                required: [true, 'article_no is required']
            },
            size:{
                type:Number,
                required: [true, 'size is required']
            },
            quantity: {
                type: Number,
                required: [true, 'Quantity is required']
            },
            rate: {
                type: Number,
                required: [true, 'Rate is required']
            }
    }],
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: 'customer',
        required: [true, 'Customer ID is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    }
    
});

const Invoice = mongoose.model('invoice',InvoiceSchema);

module.exports = Invoice;