const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Employee = require('../models/Employee');

// @route   POST api/employee/addemployee
// @desc    Add a emplooyee to the database
router.post('/addemployee', [
    body('employee_name', 'Please enter a valid name').isLength({ min: 3 }),
    body('employee_phone', 'Please enter a valid phone number').isMobilePhone(),
    body('employee_address', 'Please enter a valid address').isLength({ min: 3 }),
    body('employee_salary', 'Please enter a valid salary').isNumeric(),
    body('employee_joining_date', 'Please enter a valid joining date').isDate()
    
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ status: "danger", errors: errors.array() });
    }

    try{
        let employee = await Employee.findOne({ phone: req.body.employee_phone });
    	if (employee) {
            let response = {
                "status": "warning",
                "message": "employee already exists"
            }
    		return res.json(response);
    	}
        employee = new Employee({
            name: req.body.employee_name,
            phone: req.body.employee_phone,
            address: req.body.employee_address,
            salary: req.body.employee_salary,
            joining_date: req.body.employee_joining_date
        });
        await employee.save();
        let response = {
            "status": "success",
            "message": "employee added successfully",
            "data": employee
        }
        res.send(response);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

// @route   GET api/emplooyee/getallemplooyee
// @desc    Get all emplooyees from the database
router.get('/getallemployee', async (req, res) => {
    try{
        let employees = await Employee.find();
        let response = {
            "status": "success",
            "message": "All employees fetched successfully",
            "data": employees
        }
        res.send(response);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;