const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const clientSchema = new Schema({
    _id: { type : ObjectId },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String },
    address: { type: String }
});

module.exports = model('Client', clientSchema);