// Get random number from 0 to size:
var getRandomNumber = function(size) {
	return Math.floor(Math.random() * size);
};

// Use Pythagorean Theorem to calculate distance between click and target:
var getDistance = function(event, target) {
	var diffX = Math.abs(event.offsetX - target.x);
	var diffY = Math.abs(event.offsetY - target.y);
	console.log("diffX: " + diffX + ", diffY: " + diffY);
	return Math.sqrt((diffX * diffY) + (diffX * diffY));
};

// Determine which hint to give:
// Change to switch statement?
var getDistanceHint = function(distance) {
	if (distance < 40) {
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

var width 	= 736;
var height 	= 653;
var clicks	= 0;

// Create an object for random target location and store it in TARGET variable:
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

console.log("Target coordinates: (" + target.x + ", " + target.y + ")");

// Click event handler for the map image:
$("#map").click(function (event) {
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
	// Convert distance to hint:
	var distanceHint = getDistanceHint(distance);
	// Update #distance hint in HTML:
	$("#distance").text(distanceHint);
	// If within 8px, alert player that they won:
	if ((distance <= 20) && (clicks === 1)) {
		$("#distance").text("YOU MUST HAVE ESP!!! YOU FOUND THE TREASURE in only one click!!!");
	}
	else if ((distance <= 20) && (clicks < 1)) {
		$("#distance").text("YOU'RE RICH!!! YOU FOUND THE TREASURE in " + clicks + " clicks!!!");
	}
});