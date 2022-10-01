const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Wholesaler = require('../models/Wholesaler');

router.post('/addWholesaler', [
    body('wholesaler_name', 'Enter a valid name').isLength({ min: 3 }),
    body('wholesaler_phone', 'Enter a valid phone number').isLength({ min: 10 }),
    body('wholesaler_email', 'Enter a valid email').isEmail(),
    body('wholesaler_address', 'Enter a valid address').isLength({ min: 3 }),
    body('wholesaler_gstno', 'Enter a valid GST number').isLength({ min: 3 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        let wholesaler = await Wholesaler.findOne({ email: req.body.email });
		if (wholesaler) {
			return res.status(400).json({ error: "Sorry a user with this email already exists" })
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
        res.send(wholesaler);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})