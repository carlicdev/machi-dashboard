const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const Product = require('./product').schema;

const orderSchema = new Schema({
    _id: { type: ObjectId },
    status: { type: String, default: 'pending'},
    client: { type: String, ref: 'Client', require: true },
    deliveryDay: { type: Date, required: true },
    order: [{type: ObjectId, ref: 'Product'}],
    total: { type: Number }
});

module.exports = model('Order', orderSchema);
