/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const router = require("express").Router();
var db = require("../models");
const randomfacts = require("../public/js/randomfacts");
var Ufo = require("..//models/Ufo.js");
// use this file to code your API routes
//random alien facts data

//Get route to bring user to main dashboard
router.get("/", function (req, res) {
    res.render("dashboard", rfacts[0]);
});
// console.log(db);



// Get route for user login
router.get("/user/login", function (req, res) {
    db.Ufo.findAll({})
        .then(function (response) {
            res.json(response);
        });
});

// Get route for user register
router.get("/user/register", function (req, res) {
    db.Ufo.findAll({})
        .then(function (response) {
            res.json(response);
        });
});

router.get("/api/randomfacts/", function (req, res) {
    res.json(randomfacts);
});
// Get route for getting all of the UFO sightings
router.get("/sightings", function (req, res) {
    //findAll returns all entries for our table when used with no options
    db.Ufo.findAll({})
        .then(function (response) {
            res.json(response);
        });
});

router.get("/sightings/:state", function (req, res) {
    //findAll returns all entries for our table when used with no options
    db.Ufo.findAll({
        where: {
            state: req.params.state
        }
    }).then(function (response) {
        res.json(response);
    });
});

router.post("/sightings", function(req, res) {
    
    Ufo.create([{
           datetime: newSighting.datetime,
           city: newSighting.city,
           state: newSighting.state,
           country: "US",
           shape: newSighting.shape,
           duration_hours_min: newSighting.duration_hours_min,
           comments: newSighting.comments,
           latitude: 39.1299577,
           longitude:  -96.44058
         }],
    res.status(204).end()
    
    );
    console.log(Ufo);
 });
//Delete Route for deleting encounters from our application. We can get the id of the todo 
//to be deleted from the req.params.id
router.delete("/api/sightings/:id", function (req, res) {
    //We just have to specify which ufo encounter we want to destory with "where"
    db.Ufo.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbUfo) {
        res.json(dbUfo);
    });
});

//PUT route for updating UFOs. We can get the updated ufo data from the req.body
router.put("/api/sightings", function (req, res) {
    //Update takes in an object describing the properties we want to update,
    //and we use where to describe which objects we want to update
    db.Ufo.update({
        text: req.body.text
    }, {
        where: {
            id: req.body.id
        }
    }).then(function (dbUfo) {
        res.json(dbUfo);
    });
});


module.exports = router;