function generateRandomCountry (max, min=0){
	return Math.floor(Math.random() * (max - min)) + min;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
	const R = 6371000; // metres

	const sig1 = lat1 * Math.PI/180; // sig, lamb in radians
	const sig2 = lat2 * Math.PI/180;

	const deltasig = (lat2-lat1) * Math.PI/180;
	const deltalamb = (lon2-lon1) * Math.PI/180;

	const a = 	Math.sin(deltasig/2) * Math.sin(deltasig/2) +
			Math.cos(sig1) * Math.cos(sig2) *
          		Math.sin(deltalamb/2) * Math.sin(deltalamb/2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	const d = R * c; // in metres

	return Math.round(d/1000);
}

function calculateDirection(choiceLat, choiceLon, realLat, realLon) {
	finalDir = "arrow";


	if (parseFloat(choiceLat) > parseFloat(realLat)) {
		finalDir += "-down";
	} else if (parseFloat(choiceLat) < parseFloat(realLat)) {
		finalDir += "-up";
	}

	if (parseFloat(choiceLon) > parseFloat(realLon)) {
		finalDir += "-left";
	} else if (parseFloat(choiceLon) < parseFloat(realLon)) {
		finalDir += "-right";
	}

	return finalDir;
}

function calculatePercentage (distance) {
	// 20000 = 0% | 0 = 100%
	maxDist = 20000;	

	percentage = ((maxDist - distance) / maxDist) * 100; 

	return Math.round(percentage);
}
