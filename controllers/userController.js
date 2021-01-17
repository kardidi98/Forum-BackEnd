let model = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = {
    addUser : function (req, res) {
        req.body.email = (req.body.email).toLowerCase();
        let newUser = new model(req.body);
        
        model.findOne({email: req.body.email},  (err, results)=>{
            if (err) {
                console.error(err)
                res.status(500).send(err)
                //process.exit(1)
            }
            else if(results){
                res.status(409).send("Exists");
            }
            else {
                newUser.save((err, results) => {
                    if (err) {
                        console.error(err)
                        res.send(err)
                        //process.exit(1)
                    } else {
                        console.log('Saved: ', results);
                        res.status(200).send(results)
                        //process.exit(0)
                    }
                })
            }
        })
        
    },
    
    login : async function(req, res){
        req.body.email = (req.body.email).toLowerCase();
         model.findOne({email: req.body.email},  (err, results)=>{
            if (err) {
                console.error(err)
                res.status(500).send(err)
                //process.exit(1)
            }
            else if(!results){
                res.status(404).send("No user found.");
            }
            else {
                var passwordIsValid =  bcrypt.compareSync(req.body.password, results.password);
                if (!passwordIsValid) return res.status(401).send({id:null, auth: false, token: null });
                
                var token = jwt.sign({ id: res._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
                });
                
                res.status(200).send({id: results._id, auth: true,isAdmin: results.isAdmin, token: token });
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
                res.status(200).send(results.filter((user)=> user.isAdmin !== "true"))
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
    
    getUserByEmail: function (req, res) {
        
        model.findOne({email:req.params.email},(err, results)=>{
            if (err) {
                console.error(err)
                res.send(err)
                //process.exit(1)
            } else {
                console.log('Result By Email: ', results)
                res.status(200).send(results)
                //process.exit(0)
            }
        })
    },
    deleteUser: function (req, res) {
        model.deleteOne({_id: req.params.userId},(err, results)=>{
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
    
    modifyUser:async function (req, res) {
         req.body.password  = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
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
