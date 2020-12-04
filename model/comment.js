
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    user: {type : mongoose.Schema.Types.ObjectId, ref: "user"},
    post: {type : mongoose.Schema.Types.ObjectId, ref: "post"},
    message: {type: String, required: true},
    description: {type: String, required: true}
},{timestamps: true}
);
module.exports = mongoose.model("comment", commentSchema);