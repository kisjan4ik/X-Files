$(function(){

  $("#add").on("click", function(event){



    event.preventDefault();



    var newSighting = {

      date: $("#date").val().trim(),

      city: $("#city").val().trim(),

      state: $("#state").val().trim(),

      shape: $("#shape").val().trim(),

      duration_hours_min: $("#duration_hours_min").val().trim(),

      comments: $("#comments").val().trim(),

    };

    console.log(newSighting);

    $.ajax("/api/sightings",{

      type: "POST",

      data: newSighting

    })

      .then(function(){

        console.log("Your sighting is added");

        location.reload();

      });


    // empty each input box by replacing the value with an empty string

    $("#date").val("");

    $("#city").val("");

    $("#state").val("");

    $("#shape").val("");

    $("#duration_hours_min").val("");

    $("#comments").val("");

  });

});

