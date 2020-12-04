const mongoose = require('mongoose');

const forumSchema = mongoose.Schema({
        //_id : mongoose.Schema.Types.ObjectId,
        titre: {type: String,unique: true, required: true}
        
    
});
const model = mongoose.model("forum",forumSchema);

module.exports =  model;