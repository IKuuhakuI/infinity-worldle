function calculateDistance(lat1, lon1, lat2, lon2) {
	console.log (lon2.value);

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
	// hor = 0 igual | hor = 1 esq | hor = 2 dir
	var hor = 0;
	// ver = 0 igual | ver = 1 baixo | ver = 2 cima
	var ver = 0;

	var tHor = "";
	var tVer = "";

	if (parseFloat(choiceLat) > parseFloat(realLat)) {
		ver = 1;
		tVer = "baixo";
	} else if (parseFloat(choiceLat) < parseFloat(realLat)) {
		ver = 2;
		tVer = "cima";
	}


	if (parseFloat(choiceLon) > parseFloat(realLon)) {
		hor = 1;
		tHor = "esquerda";
	} else if (parseFloat(choiceLon) < parseFloat(realLon)) {
		hor = 2;
		tHor = "direita";
	}

	console.log (tVer + " " + tHor);
}
