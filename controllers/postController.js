const { result } = require('lodash');
const mongoose = require('mongoose');
const config = require("../config/config.json")
mongoose.connect(config.datasource);

let model = require("../model/post");

module.exports = {
    addPost : function (req, res) {
       
        
        let newPost = new model.Post(req.body);


        newPost.save((err, results) => {
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Saved: ', results)
                //process.exit(0)
            }
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
