const mongoose = require('mongoose');

const Client = require('../models/client');

exports.get_all_clients = async (req,res) => {
    await Client.find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => res.status(500).json({errMsg: err}));
};

exports.get_client = async (req, res) => {
    await Client.findById({_id: req.params.id})
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => res.status(500).json({errMsg: err}));
};

exports.create_new_client = (req, res) => {
    const { name, phone, email, address } = req.body;
    const newClient = new Client({
        _id: new mongoose.Types.ObjectId,
        name,
        phone,
        email,
        address,
    });
    newClient.save()
        .then(result => {
            res.status(201).json({
                msg: 'nuevo cliente creado',
                clientDetails: result
            })
        })
        .catch(err => res.status(500).json({errMsg: err}));
};

exports.delete_client = async (req, res) => {
    await Client.findOneAndRemove({_id: req.params.id})
        .then(() => {
            res.status(200).json({
                msg: 'cliente eliminado'
            });
        })
        .catch(err => res.status(500).json({errMsg: err}));
};

exports.update_client = async (req, res) => {
    const { name, phone, email, address } = req.body;
    await Client.findByIdAndUpdate({_id: req.params.id}, {
        $set: {
            name,
            phone,
            email,
            address,
        }
    })
        .then(() => {
            res.status(201).json({
                msg: 'cliente actualizado'
            })
        })
        .catch(err => res.status(500).json({errMsg: err}));
};
