

let model = require("../model/theme");

module.exports = {
    addTheme : function (req, res) {
        
        let newTheme = new model(req.body);

        newTheme.save((err, results) => {
            if (err) {
                console.error(err)
                res.send(err)
                //process.exit(1)
            } else {
                console.log('Saved: ', results);
                res.status(200).send(req.body)
                //process.exit(0)
            }
        })
    },
    getThemes: function (req, res) {
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
    getThemeByTitre : function (req,res){
        model.find({titre: req.params.titreTheme},(err, results) =>{
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
    getThemeById: function (req, res) {
        model.findById(req.params.themeId,(err, results)=>{
            if (err) {
                console.error(err)
                //process.exit(1)
            } else {
                console.log('Result By Id: ', results);
                res.status(200).send(results)
                //process.exit(0)
            }
        })
    },

    getThemeByForumId : function (req,res){
        model.find({forum:req.params.forumId},(err, results) =>{
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
    deleteTheme: function (req, res) {
        model.deleteOne({_id: req.params.themeId},(err, results)=>{
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
    modifyTheme: function (req, res) {
        model.findByIdAndUpdate(req.params.themeId, req.body,{upsert: true}, (err, results)=>{
            if (err) {
                console.error(err);
                res.send(err)
                //process.exit(1)
            } else {
                console.log('Updated: ', req.body);
                res.status(200).send(req.body)
                //process.exit(0)
            }
        })
    }
}
