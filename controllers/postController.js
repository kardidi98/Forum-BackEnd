

let model = require("../model/post");

module.exports = {
    addPost : function (req, res) {
       
        let newPost = new model(req.body);
        newPost.user = req.params.userId;
        newPost.save((err, results) => {
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Saved: ', results);
                res.status(200).send(newPost)
                //process.exit(0)
            }
        })
    },
    getPosts: function (req, res) {
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
    getPostById: function (req, res) {
        model.findById(req.params.postId,(err, results) =>{
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

    getPostByUserId : function (req,res){
        model.findOne({user: req.params.userId},(err, results) =>{
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
    getPostByThemeId : function (req,res){
        model.findOne({theme:req.params.themeId},(err, results) =>{
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
    

    deletePost: function (req, res) {
        model.deleteOne({_id: req.params.postId},(err, results)=>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Deleted: ', results);
                res.status(200).send(results)
                //process.exit(0)
            }
        })
    },
    modifyPost: function (req, res) {
        model.findByIdAndUpdate(req.params.postId, req.body,{upsert: true}, (err, results)=>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Updated: ', req.body);
                res.status(200).send(req.body)
                //process.exit(0)
            }
        })
    }
}
