/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
let rfacts = {
    facts: [
        "astrobiology is the official science and study of extraterresstrial life",
        "The earliest recordered UFO sighting was in 1440 B.C.",
        "People believed in alien life as early as 610B.C",
        "62 out of 1,356 astronomers reported inexplicable ariel phenomena",
        "Alien sightings have been reported in many nuclear power plants"
    ]
};


$(document).ready(function () {   
    let factstemplate = $("#alientemplate").html;
    let compliedfactstemplate = Handlebars.compile(factstemplate);
    $("#randomfacts").html(compliedfactstemplate(facts));
    //create new array for quote to be pushed to
    // let rfactarr = [];
    // console.log(results);
    // for (let i = 0; i < results.length; i++) {
    //     //here we grab the quote from the array
    // }
});
