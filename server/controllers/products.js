const mongoose = require('mongoose');

const Product = require('../models/product');

exports.get_all_products = async (req, res) => {
    await Product.find()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => res.status(500).json({errMsg: err}))
};

exports.get_product = async (req, res) => {
    await Product.findById(req.params.id)
        .then(result => {
            res.status(200).json(result);
        }).catch(err => res.status(500).json({errMsg: err}));
};

exports.create_new_product = (req, res) => {
    const { name, price } = req.body;
    const newProduct = new Product({
        _id: new mongoose.Types.ObjectId,
        name,
        price,
    });
    newProduct.save()
    .then(result => {
        res.status(201).json({
            msg: 'nuevo producto creado',
            productDetails: result
        })
    })
    .catch(err => res.status(500).json({errMsg: err}));
};

exports.delete_product = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(200).json({
                msg: 'producto eliminado'
            })
        })
        .catch(err => res.status(500).json({errMsg: err}));
};

exports.update_product = (req, res) => {
    Product.update({_id: req.params.id}, {
        $set: {
            name: req.body.name,
            price: req.body.price,
        }
    }).exec()
        .then(() => {
            res.status(200).json({
                msg: 'producto editado'
            })
        })
        .catch(err => res.status(500).json({errMsg: err}));
};