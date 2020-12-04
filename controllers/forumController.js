const mongoose = require('mongoose');

let model = require("../model/forum");

module.exports = {
    addForum: function(req, res){
        let newForum = new model(req.body);
        newForum.save((err, results) => {
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Saved: ', results);
                res.status(200).send(newForum)
                //process.exit(0)
            }
        })
    },
    
    getForums : function(req, res){
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
    getForumById : function(req, res){
        model.findById(req.params.forumId,(err, results) =>{
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
    getForumByTitle : function(req, res){
        model.findOne({titre : req.params.forumTitle},(err, results) =>{
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
    modifyForum : function (req, res) {
        model.findByIdAndUpdate(req.params.forumId, req.body,{upsert: true}, (err, results)=>{
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
    deleteForum : function(req, res){
        model.deleteOne({_id: req.params.forumId}, (err, results) =>  {
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