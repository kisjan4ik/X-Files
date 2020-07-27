/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const router = require("express").Router();
var db = require("../models");
// use this file to code your API routes
//random alien facts data
    let rfacts = [
        {
        fact:"astrobiology is the official science and study of extraterresstrial life"
        },
        {
        fact:"The earliest recordered UFO sighting was in 1440 B.C."
        }, {
        fact:"People believed in alien life as early as 610B.C"
        }, {
        fact:"62 out of 1,356 astronomers reported inexplicable ariel phenomena"
        }, {
        fact:"Alien sightings have been reported in many nuclear power plants"
        }
    ];

    let rimages = [
        {
        img: "https://images.unsplash.com/photo-1576527935473-1b8d6bfad277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        },
        {
        img: "https://media.gettyimages.com/illustrations/alien-artwork-illustration-id460713801?s=2048x2048"
        }, {
        img: "https://media.gettyimages.com/illustrations/illustration-of-a-humanoid-alien-illustration-id1124671867?s=2048x2048"
        }, {
        img: "https://www.history.com/.image/t_share/MTU3ODc3NjU1Mzk4ODUxOTEz/ufo-sightings-new-jersey-ufo-photos.jpg"
        }, {
        img: "https://media12.s-nbcnews.com/j/MSNBC/Components/Video/201909/ufothumb.focal-760x428.jpg"
        }
    ];

    let rquotes = [
            {
            quote:"The only thing that scares me more than space aliens is the idea that there aren't any space aliens. We can't be the best that creation has to offer. I pray we're not all there is. If so, we're in big trouble. ― Ellen DeGeneres"
            },
            {
            quote:"We all know interspecies romance is weird. ― Tim Burton"
            }, {
            quote:"Man has gone out to explore other worlds and other civilizations without having explored his own labyrinth of dark passages and secret chambers, and without finding what lies behind doorways that he himself has sealed. ― Stanisław Lem, Solaris"
            }, {
            quote:"As human beings, we're born believing that we are the apex of creation, that we are invincible, that no problem exists that we cannot solve. But we inevitably die with all our beliefs broken. ― Shaun David Hutchinson, We Are the Ants"
            }, {
            quote:"It is surely unreasonable to credit that only one small star in the immensity of the universe is capable of developing and supporting intelligent life. But we shall not get to them and they will not come to us. ― P.D. James, The Children of Men"
            }
        ];
//Get route to bring user to main dashboard
router.get("/", function (req, res) {
    res.render("dashboard", rfacts[0]);
});
// console.log(db);

// Get route for getting all of the UFO sightings
router.get("/sightings", function (req, res) {
    //findAll returns all entries for our table when used with no options
    db.Ufo.findAll({})
        .then(function (response) {
            res.json(response);
        });
});

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