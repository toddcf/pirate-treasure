var gameActive = true;
var width 	= 736;
var height 	= 653;
var clicks	= 0;

// Get random number from 0 to size:
var getRandomNumber = function(size) {
	return Math.floor(Math.random() * size);
};

// Use Pythagorean Theorem to calculate distance between click and target:
var getDistance = function(event, target) {
	var diffX = Math.abs(event.offsetX - target.x);
	var diffY = Math.abs(event.offsetY - target.y);
	console.log("diffX: " + diffX + ", diffY: " + diffY);
	var pythag = Math.sqrt((diffX * diffX) + (diffY * diffY));
	// console.log(pythag);
	return pythag;
};

// Determine which hint to give:
// Change to switch statement?
var getDistanceHint = function(distance) {
	if (distance <= 20) {
		winner();
	}
	else if (distance < 40) {
		return "Boiling hot!";
	}
	else if (distance < 80) {
		return "Really hot!";
	}
	else if (distance < 120) {
		return "Hot!";
	}
	else if (distance < 160) {
		return "Warm . . .";
	}
	else if (distance < 200) {
		return "Cold";
	}
	else if (distance < 320) {
		return "Really cold . . ";
	}
	else {
		return "Freezing";
	}
};

// What to do if the player wins:
var winner = function() {
	// If within 20px, alert player that they won:
	if (clicks === 1) {
		$("#distance").text("YOU MUST HAVE ESP!!! YOU FOUND THE TREASURE in only one click!!!");
	}
	else if (clicks > 1) {
		$("#distance").text("YOU'RE RICH!!! YOU FOUND THE TREASURE in " + clicks + " clicks!!!");
	}
	gameActive = false;
	// DISPLAY A START NEW GAME BUTTON, WHICH CALLS THE NEWGAME FUNCTION.
};

// Create an object for random target location and store it in TARGET variable:
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

console.log("Target coordinates: (" + target.x + ", " + target.y + ")");

// Click event handler for the map image:
$("#map").click(function (event) {
	if (gameActive) {
		// Increment click counter:
		clicks++;
		if (clicks === 1) {
			$("#attempts").text(clicks + " attempt");
		}
		else {
			$("#attempts").text(clicks + " attempts");
		}
		console.log("Click coordinates: (" + event.offsetX + ", " + event.offsetY + ")");
		// Get distance between click and target:
		var distance = getDistance(event, target);
		console.log("Distance = " + distance);
		// Convert distance to hint:
		var distanceHint = getDistanceHint(distance);
		// Update #distance hint in HTML:
		$("#distance").text(distanceHint);
	}
});

var newGame = function() {
	clicks = 0;
	gameActive = true;
};