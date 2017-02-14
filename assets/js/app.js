// Get random number from 0 to size:
var getRandomNumber = function(size) {
	return Math.floor(Math.random() * size);
};

// Use Pythagorean Theorem to calculate distance between click and target:
var getDistance = function(event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffY) + (diffX * diffY));
};

// Determine which hint to give:
var getDistanceHint = function(distance) {
	if (distance < 10) {
		return "Boiling hot!";
	}
	else if (distance < 20) {
		return "Really hot!";
	}
	else if (distance < 40) {
		return "Hot!";
	}
	else if (distance < 80) {
		return "Warm . . .";
	}
	else if (distance < 160) {
		return "Cold.";
	}
	else if (distance < 320) {
		return "Really cold . . ";
	}
	else {
		return "Freezing.";
	}
};

var width 	= 651;
var height 	= 577;
var clicks	= 0;

// Create an object for random target location and store it in TARGET variable:
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

// Click event handler for the map image:
$("#map").click(function (event) {
	// Increment click counter:
	clicks++;
});