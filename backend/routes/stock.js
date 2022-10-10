const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Stock = require('../models/Stock');

//check stock availability
router.get('/check', [
    body('article_no', 'Please enter a valid article no').isString(),
    body('size', 'Please enter a valid size').isNumeric(),
    body('brand', 'Please enter a valid brand').isString(),
    body('quantity', 'Please enter a valid quantity').isNumeric()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let stock = await Stock.findOne({ article_no: req.body.article_no, size: req.body.size, brand: req.body.brand });
        if (!stock) {
            let response = {
                "status": "warning",
                "message": "product does not exist"
            }
            return res.status(400).json(response);
        }
        else if(stock.quantity >= req.body.quantity){
            let response = {
                "status": "success",
                "message": "product is available"
            }
            return res.status(200).json(response);
        }
        else{
            let response = {
                "status": "warning",
                "message": "only "+stock.quantity+" units are available"
            }
            return res.status(400).json(response);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//fetch all stock
router.get('/fetchall', async (req, res) => {
    try {
        let stock = await Stock.find();
        if (!stock) {
            let response = {
                "status": "warning",
                "message": "no stock found"
            }
            return res.status(400).json(response);
        }
        else {
            let response = {
                "status": "success",
                "message": "stock found",
                "data": stock
            }
            return res.status(200).json(response);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//fetch stock by brand like query
router.get('/fetchbybrand', [
    body('brand', 'Please enter a valid brand').isString()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let stock = await Stock.find({ brand: { $regex: req.body.brand, $options: 'i' } });
        if (!stock) {
            let response = {
                "status": "warning",
                "message": "no stock found"
            }
            return res.status(400).json(response);
        }
        else {
            let response = {
                "status": "success",
                "message": "stock found",
                "data": stock
            }
            return res.status(200).json(response);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//fetch stock by article no like query
router.get('/fetchbyarticleno', [
    body('article_no', 'Please enter a valid article no').isString()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let stock = await Stock.find({ article_no: { $regex: req.body.article_no, $options: 'i' } });
        if (!stock) {
            let response = {
                "status": "warning",
                "message": "no stock found"
            }
            return res.status(400).json(response);
        }
        else {
            let response = {
                "status": "success",
                "message": "stock found",
                "data": stock
            }
            return res.status(200).json(response);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;