/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const router = require("express").Router();
var db = require("../models");
// use this file to code your API routes

//Get route to bring user to main dashboard
router.get("/", function (req, res) {
    var hbsobject = {
        name: Blob,
        color: blue
    };
    console.log(users);
    res.render("dashboard", hbsobject);
});
// console.log(db);

// Get route for getting all of the UFO sightings
router.get("/sightings", function (req, res) {
    //findAll returns all entries for our table when used with no options
    db.Ufo.findAll({})
        .then(function (response) {
            //We have access to the todos as an argument inside of the callback function
            console.log(response);
            res.json(response);
        });
});

//POST ROUTE FOR SAVING NEW ENCOUNTERS TO OUR DATABASE
// router.post("/api/sightings", function(req, res) {
//     //Create takes in an argument of an object describing the item we want to insert
//     //into our table
//     db.Ufo.create({
//         text: req.body.text
//     }).then(function(dbUfo) {
//             //logging out our result to see what we're working with
//             console.log(dbUfo);
//             res.json(dbUfo);
//         });
// });
//Delete Route for deleting encounters from our application. We can get the id of the todo 
//to be deleted from the req.params.id
router.delete("/api/sightings/:id", function(req, res) {
    //We just have to specify which ufo encounter we want to destory with "where"
    db.Ufo.destroy({
        where: {
            id: req.params.id
        }
    }).then (function (dbUfo) {
        res.json(dbUfo);
    });
});

//PUT route for updating UFOs. We can get the updated ufo data from the req.body
router.put("/api/sightings", function(req, res) {
//Update takes in an object describing the properties we want to update,
//and we use where to describe which objects we want to update
db.Ufo.update({
    text: req.body.text
}, {
    where: {
    id: req.body.id
    }
}).then(function(dbUfo) {
    res.json(dbUfo);
});
});


module.exports = router;