const express = require('express');
const router = express.Router();
const randomcolor = require('randomcolor');

const Order = require('../models/order');
const Product = require('../models/product');

router.get('/by-product', async (req, res) => {
    const orders = await Order.find().populate('order').exec();
    const products = await Product.find().exec();
    let mappedOrders = [];
    let moreMappedOrders = [];
    orders.map(order => {
        return mappedOrders.push(order.order);
    });
    mappedOrders.map(order => {
        order.map(product => {
            return moreMappedOrders.push(product.name);
        });
    });
    let productsByName = [];
    products.map(p => {
        productsByName.push(p.name);
    })

    let productsBySale = [];
    productsByName.forEach(p => {
        var count = 0;
        moreMappedOrders.forEach((o) => (o === p && count ++));
        productsBySale.push(
            {
                product:p, 
                sales: count, 
                percent: Math.round(count/moreMappedOrders.length * 100),
                color: randomcolor()
            }
            );
        return productsBySale;
    });
    res.send(productsBySale);
    
})

module.exports = router;