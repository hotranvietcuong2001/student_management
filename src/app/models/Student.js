const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    username: {type: String, required: true},
    course: {type: String, required: true},
    class: {type: String},
    score_gk: {type: Number},
    score_ck: {type: Number},
});

module.exports = mongoose.model('Student', Student); 