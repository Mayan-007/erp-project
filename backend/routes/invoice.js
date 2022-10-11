const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Invoice = require('../models/Invoice');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Stock = require('../models/Stock');

// @route   POST api/invoice/addinvoice
// @desc    Add a  to the invoice database
router.post('/addinvoice', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        let invoice = await Customer.findOne({customer_id: req.body.customer_id });
    	if (!invoice) {
            let response = {
                "status": "warning",
                "message": "customer does not exist"
            }
    		return res.status(400).json(response);
    	}
        let stock = null;
        let product = null;
        let amount = 0;
        for(let i=0;i<req.body.products.length;i++){
            stock = await Stock.findOne({article_no: req.body.products[i].article_no, size: req.body.products[i].size,brand: req.body.products[i].brand});
            if (!stock) {
                let response = {
                    "status": "warning",
                    "message": "product does not exist"
                }
                return res.status(200).json(response);
            }
            if(stock.quantity == req.body.products[i].quantity){
                amount = amount + (req.body.products[i].rate * req.body.products[i].quantity);
                //delete stock document where record is found
                await stock.remove();
                
            }
            else if(stock.quantity > req.body.products[i].quantity){
                //update stock document where record is found
                amount = amount + (req.body.products[i].rate * req.body.products[i].quantity);
                stock.quantity = stock.quantity - req.body.products[i].quantity;
                await stock.save();
            }
            else{
                let response = {
                    "status": "warning",
                    "message": "quantity is more than stock"
                }
                return res.status(200).json(response);
            }   
        }

        invoice = new Invoice({
            customer_id: req.body.customer_id,
            amount: amount,
            products: req.body.products
            
        });
        invoice.save();
        let response = {
            "status": "success",
            "message": "invoice added successfully",
            "data": invoice
        }
        return res.status(200).json(response);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//get all invoices
router.get('/fetchall', async (req, res) => {
    try {
        let invoice = await Invoice.find();
        if (!invoice) {
            let response = {
                "status": "warning",
                "message": "no invoice found"
            }
            return res.status(400).json(response);
        }
        else {
            let response = {
                "status": "success",
                "message": "invoice found",
                "invoice": invoice
            }
            return res.status(200).json(response);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// get all invoices with customer name and contact number
router.get('/fetchallwithcustomer', async (req, res) => {
    try {
        let invoice = await Invoice.find().populate('customer_id');
        if (!invoice) {
            let response = {
                "status": "warning",
                "message": "no invoice found"
            }
            return res.status(400).json(response);
        }
        else {
            let response = {
                "status": "success",
                "message": "invoice found",
                "invoice": invoice
            }
            return res.status(200).json(response);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;