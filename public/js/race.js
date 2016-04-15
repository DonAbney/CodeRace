$(document).ready(function() {
  setInterval(refreshRace, 1000);

  function refreshRace() {
    $.ajax({
      url: "http://localhost:8081/status",
      crossDomain: true
    }).then(function(data) {
      var leaders = [];
      var leaderWidth = 0;

      var racers = $.parseJSON(data);
      $.each(racers, function(index, racer) {
	var percComplete = racer.percentage;
	var percWidth = parseInt(racer.percentage);

	if (percWidth < 30) {
	  percWidth = 30;
	}

	$("#" + index).text(racer.screenName + ' ' + percComplete + '%');
        $('#' + index + 'cover').css('left', percWidth + '%');
        $('#' + index + 'cover').width((100 - percWidth) + '%');

      });

    });
  }
});
