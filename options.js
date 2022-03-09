function createCookie (name, value, expires) {
	// var expires = 'expires=Thu, 28 Oct 2100 00:00:00 UTC';
	document.cookie = name + "=" + value + ";" + expires;
}

function readCookie (name) {
	var vName = name + "=";
	var ca = document.cookie.split(';');

	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(vName) == 0) return c.substring(vName.length, c.length);
	}

	return "";
}

function validateCookie () {
	var getRecorde = readCookie ("Recorde");

	if (getRecorde != "") {
		alert ("Recorde " + getRecorde);
		return getRecorde;
	} 

	createCookie ("Recorde", 0, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");
	alert ("Cookie criado");
	return 0;
}

function updateCookie (hasWon) {
	if (hasWon == true) {
		currentRecord = parseInt(validateCookie()) + 1;
		createCookie ("Recorde", currentRecord, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");
	}
}
function drawOptions() {

	for (var i = 1; i <= 6; i++) {
	document.getElementById("options").innerHTML +=   '<div class=container>'
							+ '<form onsubmit="return false">'
							+ '<input name="country" id="option'+ i +'" disabled/>'
							+ '<label id="dist' + i + '" class="dist"></label>'
							+ '</form></div>';
	}

}

function checkOnMaps () {
		url = "https://www.google.com/maps/place/" + countryName;
		window.open(url, "_blank");
				
		return false;
}

function check (choice) {
	gameEnded = 0;
	var i = 0;
	var indexChoice = -1;

	while (i < countries.length) {
		if (countries[i].country == choice.value){
			indexChoice = i;
			break;
		} else if (i == countries.length - 1){
			document.getElementById("answer").style.border = "red";
			return false;
		}
		i++;
	}

	guess += 1;

	currentOption = "option" + guess;

	document.getElementById(currentOption).setAttribute('value', choice.value);
	document.getElementById("answer").setAttribute('value', "");

	if (choice.value == countryName) {

		document.getElementById(currentOption).style.backgroundColor = "green";
		document.getElementById(currentOption).style.color = "white";
		document.getElementById(currentOption).style.border = "2px solid white";

		gameEnded = 1;

		hasWon = true;
		// console.log("Acertou");
	} else {
		distance = calculateDistance (	countries[indexChoice].latitude, countries[indexChoice].longitude, 
						countryLatitude, countryLongitude);

		direction = calculateDirection (countries[indexChoice].latitude, countries[indexChoice].longitude,
						countryLatitude, countryLongitude);

		var currentDist = "dist" + guess;

		// Coloca a distancia e a direcao para o local correto
		document.getElementById(currentDist).innerHTML = distance + " Km   "
		+ "<img src =./img/" + direction + " height=15px width=15px>";

		// Verifica se o jogo acabou
		if (guess == 6) {
			hasWon = false;
			gameEnded = 1;
		}

		// console.log("Errou! Chute: " +  choice + " Correto: " + countryName + " Distancia= " + distance);

	}

	if (gameEnded == 1) {
		endGame(hasWon);
	}

	return false;
}

function endGame (hasWon) {
	updateCookie(hasWon);
	document.getElementById("answer").disabled = true;
	document.getElementById("answer").style.color = "white"
	document.getElementById("answer").style.border = "2px solid white"
	if (hasWon) {
		document.getElementById("answer").style.backgroundColor = "green"
	} else {
		document.getElementById("answer").style.backgroundColor = "red"
	}
	document.getElementById("correctAnswer").innerHTML = countryName;
	document.getElementById("btnAgain").hidden = false;
	document.getElementById("btnCheckOnMaps").hidden = false;
}
