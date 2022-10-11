const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Customer = require('../models/Customer');

// @route   POST api/customer/addcustomer
// @desc    Add a  to the customer database
router.post('/addcustomer',[
   
    body('customer_name', 'Please enter a valid customer name').isString(),
    body('customer_phone', 'Please enter a valid customer phone').isMobilePhone()
],  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        let customer = await Customer.findOne({mobile: req.body.customer_phone });
    	if (customer) {
            let response = {
                "status": "warning",
                "message": "customer already exists"
            }
    		return res.status(400).json(response);
    	}
        customer = new Customer({
           
            name: req.body.customer_name,
           
            mobile: req.body.customer_phone
            
        });
        customer.save();
        let response = {
            "status": "success",
            "message": "customer added successfully",
            "data": customer
        }
        res.json(response);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/customer/getcustomer
// @desc    Get all customers
router.get('/getallcustomer', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }   
});




module.exports = router;