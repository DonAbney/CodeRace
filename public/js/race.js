$(document).ready(function() {
  setInterval(refreshRace, 1000);

  function refreshRace() {
    $.ajax({
      // Update IP
      url: "http://localhost:8081/status",
      crossDomain: true
    }).then(function(data) {
      var leaders = [];
      var leaderWidth = 0;

      var racers = $.parseJSON(data);
      $.each(racers, function(index, racer) {
	var percComplete = racer.percentage;
	var percWidth = parseInt(racer.percentage);

	if (percWidth < 18) {
	  percWidth = 18;
	}

  if (typeof percComplete == 'undefined') {
    percComplete = 0;
  }

  racer_number = index.slice(-1);
	$("#" + index).text(racer.screenName + ' ' + percComplete + '%');
  $("#lane" + racer_number).css("background-position", percWidth + '% center');
      });

    });
  }
});
