$(document).ready(function() {
  $.ajax({
    url: "http://localhost:8081/status",
    crossDomain: true
  }).then(function(data) {
    $('#racer1').data = data;
  });
});
