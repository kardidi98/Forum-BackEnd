
let comments = [];
const lodash = require("lodash");
module.exports = {
    addComment: function(req, res){
        let newComment = req.body;
        let commentId = comments.length;
        comments.push(newComment);
        res.status(201).send({
            message : "commentaire créé avec succès",
            commentId : commentId,
            postId : req.params.postId
        })
    },
    getCommentByPost : function(req, res){
        let fetchedComments = lodash.filter(comments,(item)=>{
            //console.log(item)
            return item.postId === parseInt(req.params.postId)
        })
        res.status(200).send(fetchedComments)
    },
    getComments : function(req, res){
        
        res.status(200).send(comments)
    },
    modifyComment : function (req, res) {
        comments[req.params.commentId] = req.body
        res.status(201).send({
            message : "commentaire modifié"
        })
    },
    deleteComment : function(req, res){
        comments.splice(req.params.commentId, 1);
        res.status(200).send({
            message : "commentaire supprimé"
        })
    }
}