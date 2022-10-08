const { request } = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Purchase = require('../models/Purchase');
const Wholesaler = require('../models/Wholesaler');
const Product = require('../models/Product');
const Stock = require('../models/Stock');

// @route   POST api/purchase/addpurchase
// @desc    Add a  to the purchase database
router.post('/addpurchase',[
    body('wholesaler_id', 'Please enter a valid wholesaler id').isString(),
    body('purchase_date', 'Please enter a valid date').isDate(),
    body('purchase_amount', 'Please enter a valid amount').isNumeric(),
    // body('cheque_no', 'Please enter a valid cheque no of length 6'),
    // body('cheque_date', 'Please enter a valid cheque date').isDate(),
    body('products', 'Please enter a valid product').isArray(),
    body('payment_mode', 'Please enter a valid payment mode').isString(),
],  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{ 
        let purchase = await Wholesaler.findOne({wholesaler_id: req.body.wholesaler_id });
    	if (!purchase) {
            let response = {
                "status": "warning",
                "message": "wholesaler does not exist"
            }
    		return res.status(400).json(response);
    	}
        purchase = new Purchase({
            wholesaler_id: req.body.wholesaler_id,
            date: req.body.purchase_date,
            amount: req.body.purchase_amount,
            cheque_no: req.body.cheque_no,
            cheque_date: req.body.cheque_date,
            payement_mode:req.body.payment_mode
        });
        purchase.save();
        let response = {
            "status": "success",
            "message": "purchase added successfully",
            "data": purchase
        }
        
         let product = null;
            product = new Product({
            purchase_id: response.data._id,
            date: req.body.purchase_date,
            products: req.body.products
            

        });
        product.save();
        console.log(product);
 
        for(let i=0;i<req.body.products.length;i++){
            let stock = await Stock.findOne({article_no: req.body.products[i].article_no, size: req.body.products[i].size,brand: req.body.products[i].brand});
            if(!stock){
                stock = new Stock({
                    brand: req.body.products[i].brand,
                    article_no: req.body.products[i].article_no,
                    size: req.body.products[i].size,
                    quantity: req.body.products[i].purchase_quantity,
                    date: req.body.purchase_date,
                    
                });
                stock.save();
                
            }
            else{
            
                stock.quantity = stock.quantity + req.body.products[i].purchase_quantity;
                stock.save();
            }
        }
        let response1 = {
            "status": "success",
            "message": "stock updated successfully",
            
        }
        return res.status(200).json(response1);

    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// @route   GET api/purchase/getallpurchase
// @desc    Get all purchase from the database
router.get('/getallpurchase', async (req, res) => {
    try{
        let purchase = await Purchase.find();
        let response = {
            "status": "success",
            "message": "All purchase records fetched successfully",
            "data": purchase
        }
        res.send(response);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;