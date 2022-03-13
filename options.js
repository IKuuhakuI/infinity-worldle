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

function validateCookie (cookieName) {

	var getCookie = readCookie (cookieName);

	if (getCookie != "") {
		return getCookie;
	} 

	createCookie (cookieName, 0, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");
	return 0;
}

function updateCookies (hasWon, gameType) {
	gamesPlayed = gameType + 'Played';
	gamesWon = gameType + 'Won';
	currentStreak = gameType + 'CurrentStreak';
	maxStreak = gameType + 'MaxStreak';

	cookieList = setGameType (gameType);	

	cookieList[0].gamesPlayed = parseInt (cookieList[0].gamesPlayed) + 1;
	createCookie (gamesPlayed, cookieList[0].gamesPlayed, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");		

	if (hasWon == true) {
		cookieList[0].gamesWon = parseInt (cookieList[0].gamesWon) + 1;
		cookieList[0].currentStreak = parseInt (cookieList[0].currentStreak) + 1;
		cookieList[0].maxStreak = parseInt (cookieList[0].maxStreak);

		console.log("aqui");

		createCookie (gamesWon, cookieList[0].gamesWon, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");		
		createCookie (currentStreak, cookieList[0].currentStreak, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");

		if (cookieList[0].maxStreak < cookieList[0].currentStreak) {
			createCookie (maxStreak, cookieList[0].currentStreak, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");
		}
	} else {
		createCookie (currentStreak, 0, " expires=Thu, 28 Oct 2100 00:00:00 UTC ");
	}
}

function setGameType (gameType) {
	var gamesPlayed;
	var gamesWon;
	var currentStreak;
	var maxStreak;

	gamesPlayed = gameType + 'Played';
	gamesWon = gameType + 'Won';
	currentStreak = gameType + 'CurrentStreak';
	maxStreak = gameType + 'MaxStreak';

	valueGamesPlayed = validateCookie (gamesPlayed);
	valueGamesWon = validateCookie (gamesWon);
	valueCurrentStreak = validateCookie (currentStreak);
	valueMaxStreak = validateCookie (maxStreak);
	
	cookieList = [{
		gamesPlayed: valueGamesPlayed,
		gamesWon: valueGamesWon,
		currentStreak: valueCurrentStreak,
		maxStreak: valueMaxStreak
	}];

	return cookieList;
}

function showStats (gameType) {
	cookieList = setGameType (gameType);

	document.getElementById("content1").innerHTML = "Jogos jogados: " + cookieList[0].gamesPlayed
							+ "<br><br>Jogos vencidos: " + cookieList[0].gamesWon
							+ "<br><br>Sequência de vitórias atual: " + cookieList[0].currentStreak
							+ "<br><br>Maior sequência de vitórias: " + cookieList[0].maxStreak;
}

function drawOptions() {
	for (var i = 1; i <= 6; i++) {
	document.getElementById("options").innerHTML +=   '<div class=container>'
							+ '<div class="loadbar" id="optionBar' + i + '">'
							+ '</div>'
							+ '<div class="countryBar" id="option' + i + '">'
							+ '</div>'
							+ '<div class="boxDist">'
							+ '<h3 id="dist' + i + '"></h3>'
							+ '</div>'
							+ '<div class="boxDir">'
							+ '<i id="dir' + i + '"></i>'
							+ '</div>'
							+ '<div class="boxPercent" id="percent' + i + '">'
							+ '</div>'
							+ '</div>';	
	}
}

function checkOnMaps () {
		url = "https://www.google.com/maps/place/" + countryName;
		window.open(url, "_blank");
				
		return false;
}

function setOptionBar (currentOptionBar, percentage) {
	green = "https://abs-0.twimg.com/emoji/v2/svg/1f7e9.svg";
	yellow = "https://abs-0.twimg.com/emoji/v2/svg/1f7e8.svg";
	red = "https://abs-0.twimg.com/emoji/v2/svg/1f7e5.svg";

	if (percentage < 20) {
		document.getElementById (currentOptionBar).innerHTML += 
							'<img class="bar" src="' + yellow +'">'
							+ '<img class="bar" src="' + red +'">'
							+ '<img class="bar" src="' + red +'">'
							+ '<img class="bar" src="' + red +'">'
							+ '<img class="bar" src="' + red +'">';

	} else if (percentage < 40) {
		document.getElementById (currentOptionBar).innerHTML += 
							'<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + yellow +'">'
							+ '<img class="bar" src="' + red +'">'
							+ '<img class="bar" src="' + red +'">'
							+ '<img class="bar" src="' + red +'">';

	} else if (percentage < 60) {
		document.getElementById (currentOptionBar).innerHTML += 
							'<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + yellow +'">'
							+ '<img class="bar" src="' + red +'">'
							+ '<img class="bar" src="' + red +'">';

	} else if (percentage < 80) {
		document.getElementById (currentOptionBar).innerHTML += 
							'<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + yellow +'">'
							+ '<img class="bar" src="' + red +'">';

	} else {
		document.getElementById (currentOptionBar).innerHTML += 
							'<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + green +'">'
							+ '<img class="bar" src="' + yellow +'">';
	} 
}

function check (choice, gameType) {
	gameEnded = 0;
	var i = 0;
	var indexChoice = -1;

	while (i < countries.length) {
		if (countries[i].country == choice.value || countries[i].ptBr == choice.value){
			indexChoice = i;
			break;
		} else if (i == countries.length - 1){
			return false;
		}
		i++;
	}

	guess += 1;

	currentOption = "option" + guess;
	currentOptionBar = "optionBar" + guess;
	currentText = "text" + guess;

	document.getElementById(currentOption).innerHTML += '<h3 id="' + currentText + '">' + choice.value + '</h3>';
	console.log (choice.value.length);
	if (choice.value.length > 33) {
		document.getElementById(currentText).style = "font-size: 15px;";
	}

	var currentDist = "dist" + guess;
	var currentDir = "dir" + guess;
	var currentPercentage = "percent" + guess;


	if (countries[i].country == countryName) {

		document.getElementById(currentOption).style.backgroundColor = "green";
		document.getElementById(currentOption).style.color = "white";
		document.getElementById(currentOption).style.border = "2px solid white";

		document.getElementById(currentDist).innerHTML = "0 km";

		document.getElementById(currentDir).classList.add("fa");
		document.getElementById(currentDir).classList.add("fa-trophy");

		document.getElementById(currentPercentage).innerHTML = '<h3>' + 100 + '%</h3>';
		document.getElementById (currentOptionBar).innerHTML += 
							'<img class="bar" src="https://abs-0.twimg.com/emoji/v2/svg/1f7e9.svg">'
							+ '<img class="bar" src="https://abs-0.twimg.com/emoji/v2/svg/1f7e9.svg">'
							+ '<img class="bar" src="https://abs-0.twimg.com/emoji/v2/svg/1f7e9.svg">'
							+ '<img class="bar" src="https://abs-0.twimg.com/emoji/v2/svg/1f7e9.svg">'
							+ '<img class="bar" src="https://abs-0.twimg.com/emoji/v2/svg/1f7e9.svg">';

		gameEnded = 1;

		hasWon = true;
		// console.log("Acertou");
	} else {
		distance = calculateDistance (	countries[indexChoice].latitude, countries[indexChoice].longitude, 
						countryLatitude, countryLongitude);

		direction = calculateDirection (countries[indexChoice].latitude, countries[indexChoice].longitude,
						countryLatitude, countryLongitude);

		var percentage = calculatePercentage (distance);

		setOptionBar (currentOptionBar, percentage);

		// Coloca a distancia e a direcao para o local correto
		document.getElementById(currentDist).innerHTML = distance + " km";
		document.getElementById(currentDir).classList.add("bi");
		document.getElementById(currentDir).classList.add("bi-" + direction);
		document.getElementById(currentPercentage).innerHTML = '<h3>' + percentage + '%</h3>';

		document.getElementById("answer").value = "";
		// Verifica se o jogo acabou
		if (guess == 6) {
			hasWon = false;
			gameEnded = 1;
		}

		// console.log("Errou! Chute: " +  choice + " Correto: " + countryName + " Distancia= " + distance);
	}

	if (gameEnded == 1) {
		endGame(hasWon, gameType);
	}

	return false;
}

function endGame (hasWon, gameType) {
	updateCookies(hasWon, gameType);

	currentLang = document.documentElement.lang;

	answerName = countryName;

	if (currentLang == "pt-BR") {
		for (var i = 0; i < countries.length; i++) {
			if (countries[i].country == countryName) {
				answerName = countries[i].ptBr;
			}
		}
	}

	document.getElementById("answer").value = answerName;
	document.getElementById("answer").disabled = true;
	document.getElementById("answer").style.color = "white"
	document.getElementById("answer").style.border = "2px solid white"
	if (hasWon) {
		document.getElementById("answer").style.backgroundColor = "green"
	} else {
		document.getElementById("answer").style.backgroundColor = "red"
	}
	document.getElementById("btnAgain").style.visibility = "visible";
		document.getElementById("btnCheckOnMaps").style.visibility = "visible";
}

function setCountryListValues (urlArg, countryList) {
	possibilities = ["America", "Europe", "Oceania", "Asia", "Africa"];

	for (var x in possibilities) {
		if (urlArg == possibilities[x]) {
			break;
		} else if (x == (possibilities.length - 1)) {
			return countryList;
		}
	}


	var newCountryList = [];

	for (var i = 0; i < countryList.length; i++) {
		if (countryList[i].continent == urlArg) {
			console.log (countryList[i]);
			newCountryList.push (countryList[i]);
		}
	}

	console.log (newCountryList);

	return newCountryList
}

function getTitle (urlArg) {
	possibilities = ["America", "Europe", "Oceania", "Asia", "Africa"];

	var selectedTitle = "Worldle"

	for (var x in possibilities) {
		if (urlArg == possibilities[x]) {
			return urlArg;
		}
	}

	return selectedTitle;
}
