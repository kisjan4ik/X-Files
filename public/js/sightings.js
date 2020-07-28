/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
$("#add").on("click", function(event){

  event.preventDefault();

  var newSighting = {
    datetime: $("#datetime").val().trim(),
    state: $("#state").val().trim(),
    country: "US",
    shape: $("#shape").val().trim(),
    duration_hours_min: $("#duration_hours_min").val().trim(),
    comments: $("#comments").val().trim(),
    latitude: 39.1299577,
    longitude: -96.44058   
  };
  console.log(newSighting);
  $.ajax("/sightings",{
    type: "POST",
    data: newSighting
  })
    .then(function(){
      console.log("Your sighting is added");
      location.reload();
    });
    
  // empty each input box by replacing the value with an empty string
  $("#datetime").val("");
  $("#state").val("");
  $("#shape").val("");
  $("#duration_hours_min").val("");
  $("#comments").val("");
});