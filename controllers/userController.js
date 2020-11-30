const mongoose = require('mongoose');
let model = require("../model/user");

module.exports = {
    addUser : function (req, res) {
       
        let newUser = new model(req.body);
        
        newUser.save((err, results) => {
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Saved: ', results)
                //process.exit(0)
            }
        })
    },
    getUsers: function (req, res) {
        model.find((err, results)=>{
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
    getUserById: function (req, res) {
        model.findById(req.params.userId,(err, results)=>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Result By Id: ', results)
                res.status(200).send(results)
                //process.exit(0)
            }
        })
    },
    deleteUser: function (req, res) {
        model.deleteOne(req.params.userId,(err, results)=>{
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
    modifyUser: function (req, res) {
        model.findByIdAndUpdate(req.params.userId, req.body,{upsert: true}, (err, results)=>{
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
