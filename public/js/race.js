$(document).ready(function() {
  $.ajax({
    url: "http://localhost:8081/status",
    crossDomain: true
  }).then(function(data) {
    var racers = $.parseJSON(data);
    $('#racer1').text(racers.racer1.percent);
    $('#racer1').width(parseInt(racers.racer1.percent) + "%");
    $('#racer2').text(racers.racer2.percent);
    $('#racer2').width(parseInt(racers.racer2.percent) + "%");
    $('#racer3').text(racers.racer3.percent);
    $('#racer3').width(parseInt(racers.racer3.percent) + "%");
    $('#racer4').text(racers.racer4.percent);
    $('#racer4').width(parseInt(racers.racer4.percent) + "%");
    $('#racer5').text(racers.racer5.percent);
    $('#racer5').width(parseInt(racers.racer5.percent) + "%");
  });
});
