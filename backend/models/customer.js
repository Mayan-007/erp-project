const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const CustomerSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name field is required']
    },
    mobile: {
        type: Number,
        require: [true, 'Mobile number is required']
    }
});

const Customer = mongoose.model('customer',CustomerSchema);

module.exports = Customer;
