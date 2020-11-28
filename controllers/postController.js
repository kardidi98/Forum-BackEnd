
let posts = [];

module.exports = {
    addPost : function (req, res) {
        let  newPost = req.body;

        let postId  = posts.length;
        posts.push(newPost);
        
        res.status(201).send({
            message : "post créé avec succès",
            postId : postId
        })
    },
    getPosts: function (req, res) {
        res.status(200).send(posts)
    },
    getPostById: function (req, res) {
        let fetchedPost = posts[req.params.postId];
        res.status(200).send({
            message: "post trouvé",
            post : fetchedPost
        })
    },
    deletePost: function (req, res) {
        posts.splice(req.params.postId, 1);
        res.status(200).send({
            message : "post supprimé"
        })
    },
    modifyPost: function (req, res) {
        posts[req.params.postId] = req.body
        res.status(201).send({
            message : "post modifié"
        })
    }
}
