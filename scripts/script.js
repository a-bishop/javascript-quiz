$(document).ready(function() {
	if (window.localStorage) {

		var username = localStorage.getItem("username");
		localStorage.getItem("highscore");

		// if no username, prompt user for name
		if (username === null) {
			var name = prompt("Please enter a user name");
			localStorage.setItem("username", name);
		}

		// submitting the quiz
		$("#submit").click(function() {
			var numCorrect = 0;
			var highscore = localStorage.getItem("highscore");

			// confirm buttons have all been checked
			if ($("input:radio:checked").length < 5) {
				alert("You need to select answers for all the questions!");
			} else {

				// determine if checked buttons are correct
				$("input:radio:checked").each(function() {
					if (/correct$/.test($(this).attr("id"))) {
						numCorrect ++;
					}
				});

        // show the score
				$("#score").text("You scored " + numCorrect + " out of 5").fadeIn(3000);
				$("#results").text("RESULTS: " + localStorage.getItem("username") + ", you scored " + numCorrect + " out of 5").fadeIn(3000);

				// if the current number of correct answers is greater than highscore,
				// set highscore to the current score
				if (numCorrect > highscore) {
					$("#fader").text("That's your best score!").fadeIn(2000);
					$("#fader").fadeOut(3000);
					localStorage.setItem("highscore", numCorrect);
				} else {
					$("#fader").text("");
				}
			}
		});
	}
});
