
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user: user,
    post: post,
    message: String ,
    dateCreation: String
},{timestamps: true}
);
module.exports = mongoose.model("comment", commentSchema);