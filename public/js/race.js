$(document).ready(function() {
  setInterval(refreshRace, 3000);

  function refreshRace() {
    $.ajax({
      url: "http://localhost:8081/status",
      crossDomain: true
    }).then(function(data) {
      var racers = $.parseJSON(data);

      $.each(racers, function(index, racer) {
	var percComplete = racer.percent;
	$("#" + index).text(percComplete + '%');
        $('#' + index).width(parseInt(percComplete) + '%');
      });
    });
  }
});
