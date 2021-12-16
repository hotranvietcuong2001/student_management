const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    password: {type: String, required: true},
    name: {type: String},
    dob: {type: Date},
    gender: {type: String},
    class: {type: String},
    role: {type: String},
});

module.exports = mongoose.model('User', User); 