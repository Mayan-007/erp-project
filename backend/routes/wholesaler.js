const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Wholesaler = require('../models/Wholesaler');

// @route   POST api/wholesaler/addwholesaler
// @desc    Add a wholesaler to the database
router.post('/addwholesaler', [
    body('wholesaler_name', 'Please enter a valid name').isLength({ min: 3 }),
    body('wholesaler_phone', 'Please enter a valid phone number').isMobilePhone(),
    body('wholesaler_email', 'Please enter a valid email').isEmail(),
    body('wholesaler_address', 'Please enter a valid address').isLength({ min: 3 }),
    body('wholesaler_gstno', 'Please enter a valid GST number').matches("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"),
    body('wholesaler_pincode', 'Please enter a valid pincode').isLength({ min: 6, max: 6 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ status: "danger", errors: errors.array() });
    }

    try{
        let wholesaler = await Wholesaler.findOne({ contact_details: { $elemMatch: { email: req.body.wholesaler_email } } });
    	if (wholesaler) {
            let response = {
                "status": "warning",
                "message": "Wholesaler already exists"
            }
    		return res.json(response);
    	}
        wholesaler = new Wholesaler({
            name: req.body.wholesaler_name,
            contact_details: [{
                mobile: req.body.wholesaler_phone,
                email: req.body.wholesaler_email
            }],
            address: req.body.wholesaler_address,
            gstno: req.body.wholesaler_gstno,
            pincode: req.body.wholesaler_pincode
        });
        wholesaler.save();
        let response = {
            "status": "success",
            "message": "Wholesaler added successfully",
            "data": wholesaler
        }
        res.send(response);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

// @route   GET api/wholesaler/getallwholesaler
// @desc    Get all wholesalers from the database
router.get('/getallwholesaler', async (req, res) => {
    try{
        let wholesalers = await Wholesaler.find();
        let response = {
            "status": "success",
            "message": "All wholesalers fetched successfully",
            "data": wholesalers
        }
        res.send(response);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;