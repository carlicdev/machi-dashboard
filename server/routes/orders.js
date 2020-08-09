const express = require('express');
const router = express.Router();

const orderCtrl = require('../controllers/orders');

router.get('/', orderCtrl.get_all_orders);

router.get('/:id', orderCtrl.get_order);

router.post('/new-order', orderCtrl.new_order);

router.delete('/delete-order/:id', orderCtrl.delete_order);

router.patch('/update/:id', orderCtrl.update_order);

router.patch('/update-status/:id', orderCtrl.update_status);

module.exports = router;