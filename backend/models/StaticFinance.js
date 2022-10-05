const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaticFinanceSchema = new Schema({
    GST_no: {
        type: String,
    require: [true, 'GST field is required']
    },
    mobile: {
        type: Number,
        require: [true, 'Mobile number is required']
    },
    cgst:{
        type:Number,
        require: [true, 'CGST is required']
    },
    sgst:{
        type:Number,
        require: [true, 'SGST is required']
    },
    address:{
        type:String,
        require: [true, 'Address is required']
    }

});

const StaticFinance = mongoose.model('staticFinance',StaticFinanceSchema);

module.exports = StaticFinance;