
const mongoose = require('mongoose');

const themeSchema = mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    moderateur:{type: mongoose.Schema.Types.ObjectId, ref:"user"},
    forum:{type: mongoose.Schema.Types.ObjectId, ref:"forum"},
    titre: {type: String,unique: true, required: true},
    description: {type: String, required: true},
}
);
const model = mongoose.model("theme",themeSchema);

module.exports =  model;