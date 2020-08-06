const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const productSchema = new Schema({
    _id: { type: ObjectId },
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = model('Product', productSchema);