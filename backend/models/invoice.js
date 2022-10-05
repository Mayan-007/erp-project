const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const InvoiceSchema = new Schema({
   products: [{
            brand: {
                type: String,
                required: [true, 'brand is required']
            },
            color:{
                type:String,
                required: [true, 'color is required']
            },
            size:{
                type:Number,
                required: [true, 'size is required']
            },
            quantity: {
                type: Number,
                required: [true, 'Quantity is required']
            }
    }],
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: 'customer',
        required: [true, 'Customer ID is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    cheque_no: {
        type: String
    },
    cheque_date: {
        type: Date
    },
    payement_mode: {
        type: String,
        required: [true, 'Payement mode is required']
    }
    
});

const Invoice = mongoose.model('invoice',InvoiceSchema);

module.exports = Invoice;