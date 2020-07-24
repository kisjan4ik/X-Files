
setTimeout(function() {
  setInterval(function() {
    $("#alien1").attr("src",$("#alien1").attr("src"));
  },1);
}, 4500);

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

var expanded1 = false;

function showCheckboxes1() {
  var checkboxes1 = document.getElementById("checkboxes1");
  if (!expanded1) {
    checkboxes1.style.display = "block";
    expanded1 = true;
  } else {
    checkboxes1.style.display = "none";
    expanded1= false;
  }
}
showCheckboxes();
showCheckboxes1();