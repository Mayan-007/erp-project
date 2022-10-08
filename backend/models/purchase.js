const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const PurchaseSchema = new Schema({
    wholesaler_id: {
        type:Schema.Types.ObjectId,
        ref:'wholesaler',
        required: [true, 'Wholesaler ID is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    cheque_no: {
        type: String,
        default: null
    },
    cheque_date: {
        type: Date,
        default: null
    },
    payement_mode: {
        type: String,
        required: [true, 'Payement mode is required']
    }
});

const Purchase = mongoose.model('purchase',PurchaseSchema);

module.exports = Purchase;