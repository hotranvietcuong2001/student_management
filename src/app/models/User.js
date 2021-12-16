const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String},
    gender: {type: String},
    dob: {type: Date},
    class: {type: String},
    role: {type: String},
});

module.exports = mongoose.model('User', User); 