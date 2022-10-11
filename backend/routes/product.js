const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product');
const Purchase = require('../models/Purchase');
//get product by purchase id
router.get('/getproductbypurchaseid/:purchase_id', async (req, res) => {
    try {
        const product = await Product.findOne({purchase_id: req.params.purchase_id});
        if (!product) {
            let response = {
                "status": "warning",
                "message": "product does not exist"
            }
            return res.status(400).json(response);
        }
        else {
            let response = {
                "status": "success",
                "message": "product found",
                "prodcuts": product.products
            }
            return res.status(200).json(response);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
module.exports = router;