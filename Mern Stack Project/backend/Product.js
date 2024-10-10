const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id : Number,
    name : String,
    frountImage : String,
    image : String,
    description : String
});

module.exports = mongoose.model("Product",schema);