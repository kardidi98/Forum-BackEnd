

let model = require("../model/comment");

module.exports = {
    addComment: function(req, res){
        let newComment = new model(req.body);
        newComment.post = req.params.postId;
        newComment.user = req.params.userId;
        newComment.save((err, results) => {
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Saved: ', results);
                res.status(200).send(newComment)
                //process.exit(0)
            }
        })
    },
    getCommentsByPostId : function(req, res){
        model.find({post: req.params.postId},(err, results) =>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
                //process.exit(0)
            }
        })
        
    },
    getCommentsByUserId : function(req, res){
        model.find({user: req.params.userId},(err, results) =>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
                //process.exit(0)
            }
        })
        
    },
    getComments : function(req, res){
        model.find((err, results) =>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
                //process.exit(0)
            }
        })
    },
    getCommentById : function(req, res){
        model.findById(req.params.commentId,(err, results) =>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
                //process.exit(0)
            }
        })
    },
    modifyComment : function (req, res) {
        model.findByIdAndUpdate(req.params.commentId, req.body,{upsert: true}, (err, results)=>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Updated: ', req.body);
                res.status(200).send(req.body)
                //process.exit(0)
            }
        })
    },
    deleteComment : function(req, res){
        model.deleteOne({_id: req.params.commentId}, (err, results) =>  {
            if(err){
                console.error(err);
            }
            else{
                console.log('Deleted: ', results);
                res.status(200).send(results)
            }
        })
    }
}