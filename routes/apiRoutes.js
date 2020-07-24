const router = require("express").Router();
var db = require("../models");
// use this file to code your API routes

router.get("/", function(req, res, next) {
    res.render("#")
})
// console.log(db);

router.get("/sighting", function(req, res){
db.Ufo.findAll({})
    .then(function(response){
        console.log(response);
        res.json(response)
    })
})
module.exports = router;