const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const EmployeeSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name field is required']
    },
    phone: {
        type: Number,
        require: [true, 'Phone number is required']
    },
    address: {
        type: String,
        require: [true, 'Address is required']
    },
    salary: {
        type: Number,
        require: [true, 'Salary is required']
    },
    joining_date: {
        type: Date,
        require: [true, 'Joining date is required']
    }

});

const Employee = mongoose.model('employee',EmployeeSchema);

module.exports = Employee;