
const mongoose = require('mongoose');

const themeSchema = mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    titre: {type: String, required: true},
    description: {type: String, required: true},
}
);
const renderModel = mongoose.model("theme",themeSchema);
module.exports =  renderModel;