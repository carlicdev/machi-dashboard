const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');
const Client = require('../models/client');

function getTotal(order) {
    if (order.length < 1) {
        let tempTotal = 0;
        order.forEach(i => {
            tempTotal = tempTotal + i.price
        });
        return tempTotal;
    } else {
        return null;
    }
}

exports.get_all_orders = async (req, res) => {
    await Order.find().populate('client', 'name _id').populate('order', 'name price')
        .then(result => {
            console.log(result);
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

exports.new_order = async (req, res) => {
    const { client, year, month, day, order } = req.body;
    const myClient = await Client.findOne({name: client}).exec();

    const newOrder = new Order({
        _id: new mongoose.Types.ObjectId,
        client: myClient,
        deliveryDay: new Date(year,month-1,day),
        order: order,
        total: 100
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