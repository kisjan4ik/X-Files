$(document).ready(function () {
  var dateTime = $("#datetime");
  var city = $("#city");
  var state = $("#state");
  var shape = $("#shape");
  var duration = $("#duration_hours_min");
  var comments = $("#comments");

  $(document).on("submit", "#sighting", createNewSighting);

  getSighting();

  function createNewSighting(event) {
    event.preventDefault();

    // eslint-disable-next-line no-use-before-define
    addSighting({
      datetime: dateTime,
      city: city,
      state: state,
      country: "US",
      shape: shape,
      duration_hours_min: duration,
      comments: comments,
      latitude: 39.1299577,
      longitude:  -96.44058
    });
  }
  function addSighting(sightingData) {
    $.post("api/sightings",sightingData)
      .then(getSighting);
  }
});