const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const WholesalerSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name field is required']
    },
    contact_details: [{
        mobile: {
            type: Number,
            require: [true, 'Mobile number is required']
        },
        email: {
            type: String,
            require: [true, 'Email is required']
        },
    }],
    address: {
        type: String,
        require: [true, 'Address is required']
    },
    gstno: {
        type: String,
        require: [true, 'GST number is required']
    },
    pincode: {
        type: Number,
        require: [true, 'Pincode is required']
    }

});

const Wholesaler = mongoose.model('wholesaler',WholesalerSchema);

module.exports = Wholesaler;