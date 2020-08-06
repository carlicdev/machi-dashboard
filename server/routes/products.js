const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products');

router.get('/', productCtrl.get_all_products);

router.get('/:id', productCtrl.get_product);

router.post('/new-product', productCtrl.create_new_product);

router.delete('/delete-product/:id', productCtrl.delete_product);

router.patch('/update/:id', productCtrl.update_product);

module.exports = router;