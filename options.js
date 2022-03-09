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


	if (choice.value == countryName) {
		currentOption = "option" + guess;

		document.getElementById(currentOption).style.backgroundColor = "green";
		document.getElementById(currentOption).style.color = "white";
		document.getElementById(currentOption).style.border = "2px solid white";

		gameEnded = 1;
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
			gameEnded = 1;
		}

		// console.log("Errou! Chute: " +  choice + " Correto: " + countryName + " Distancia= " + distance);

	}

	if (gameEnded == 1) {
		endGame();
	}

	return false;
}

function endGame () {
	document.getElementById("correctAnswer").innerHTML = countryName;
	document.getElementById("btnAgain").hidden = false;
	document.getElementById("btnCheckOnMaps").hidden = false;
}
