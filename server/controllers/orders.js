const mongoose = require('mongoose');

const Order = require('../models/order');

function getTotal(order) {
    let tempTotal = 0;
    order.forEach(i => {
        tempTotal = tempTotal + i.price
    });
    return tempTotal;
}

exports.get_all_orders = async (req, res) => {
    await Order.find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => res.status(500).json({errMsg: err}));
};

exports.get_order = async (req, res) => {
    await Order.findById({_id: req.params.id})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(500).json({errMsg: err}))
};

exports.new_order = (req, res) => {
    const { client, deliveryDay, order } = req.body;
    const { y, m, d } = deliveryDay;
    const total = getTotal(order);
    const newOrder = new Order({
        _id: new mongoose.Types.ObjectId,
        client,
        deliveryDay: new Date(y,m-1,d),
        order,
        total,
    });
    newOrder.save()
        .then(result => {
            res.status(201).json({
                msg: 'orden creada',
                orderDetails: result
            })
        })
        .catch(err => res.status(500).json({errMsg: err}));
};

exports.delete_order = (req, res) => {
    Order.findOneAndRemove({_id: req.params.id})
        .then(() => {
            res.status(200).json({
                msg: 'orden eliminada'
            })
        })
        .catch(err => res.status(500).json({errMsg: err}))
};

exports.update_order = (req, res) => {
    const { client, deliveryDay, order } = req.body;
    const { y, m, d } = deliveryDay;
    const total = getTotal(order);
    Order.findByIdAndUpdate({_id: req.params.id}, {
        $set: {
            client,
            deliveryDay: new Date(y,m-1,d),
            order,
            total,
        }
    })
    .then(() => {
        res.status(201).json({
            msg: 'orden actualizada'
        })
    })
    .catch(err => res.status(500).json({errMsg: err}))
};