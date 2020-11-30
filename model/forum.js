const mongoose = require('mongoose');

module.exports = {
    forumSchema : {
        _id : mongoose.Schema.Types.ObjectId,
        titre: String,
        
    }
}