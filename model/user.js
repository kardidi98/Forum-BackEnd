const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    email: {type: String, unique:true, required: true},
    password: {type: String, required: true}, 
    isAdmin:{type: String}
},{timestamps: true}
);

userSchema.pre('save', async function (next) {
   try{
       const salt = await bcrypt.genSalt(10);
       const hash = await bcrypt.hash(this.password, salt);
       this.password = hash;
       next();
   }
   catch (err){
        next(err);
   }
    
});


const model = mongoose.model("user", userSchema);

module.exports = model;