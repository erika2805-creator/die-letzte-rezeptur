console.log("NEUE MAIN.JS GELADEN");
const button = document.querySelector("#start-button");
const message = document.querySelector("#message");
const progressBar = document.querySelector("#progress-bar");
const nextButton = document.querySelector("#next-button");
const wirkstoffStation = document.querySelector("#wirkstoff-station");

const analyseButton = document.querySelector("#analyse-button");
const analyseErgebnis = document.querySelector("#analyse-ergebnis");

let started = false;

button.addEventListener("click", function() {

	if (started === false) {
		started = true;

		button.textContent = "Rezeptur läuft!";

		message.textContent = "💊 Rezeptur wird vorbereitet ... 0 % ";
		progressBar.style.width = "0%";

		setTimeout(function() {
			message.textContent = "💊 Rezeptur wird vorbereitet ... 25 %";
			progressBar.style.width = "25%";
		}, 1000);

		 setTimeout(function() {
                        message.textContent = "💊 Rezeptur wird vorbereitet ... 50 %";
			progressBar.style.width = "50%";
                }, 2000);

		 setTimeout(function() {
                        message.textContent = "💊 Rezeptur wird vorbereitet ... 75 %";
			progressBar.style.width = "75%";
                }, 3000);

		 setTimeout(function() {
                        message.textContent = "💊 Rezeptur vollständig! ❤  100 %";
			progressBar.style.width = "100%";
			nextButton.style.display = "inline-block";
                }, 4000);

	} else {
		message.textContent = "Eyy nicht so ungeduldig! Die Rezeptur läuft bereits!!";
	}
});

nextButton.addEventListener("click", function() {
	message.textContent = "Station 2 wird vorbereitet ... 🧪 ";

	wirkstoffStation.style.display = "block";
});

analyseButton.addEventListener("click", function() {
	analyseErgebnis.textContent = "🧪 Analyse läuft ...";

	setTimeout(function() {
		analyseErgebnis.textContent = "✓ Wirkstoff identifiziert";
	}, 1000);

	setTimeout(function() {
                analyseErgebnis.textContent = "✓  Außergewöhnlich hohe Wirksamkeit";
        }, 2000);

	setTimeout(function() {
                analyseErgebnis.textContent = "✓ Langzeitwirkung bestätigt";
        }, 3000);

	setTimeout(function() {
                analyseErgebnis.textContent = "⚠️  Suchtpotenzial: kritisch";
        }, 4000);

	setTimeout(function() {
                analyseErgebnis.textContent = "💗 Fachinformation: Dieser Wirkstoff darf ausschließlich mit ganz viel Liebe angewendet werden. Eine Überdosierung ist ausdrücklich erwünscht.";
        }, 5500);
});


const pruefungen = document.querySelectorAll(".pruefung");
const pruefungsMessage = document.querySelector("#pruefungs-message");

pruefungen.forEach(function(pruefung) {

	pruefung.addEventListener("click", function() {

		const message = pruefung.dataset.message;

		pruefungsMessage.textContent = message;

	});

});


const energie = document.querySelector("#energie");
const wissen = document.querySelector("#wissen");
const koffein = document.querySelector("#koffein");
const nerven = document.querySelector("#nerven");

const lernenButton = document.querySelector("#lernen-button");
const koffeinButton = document.querySelector("#koffein-button");
const pauseButton = document.querySelector("#pause-button");

const survivalMessage = document.querySelector("#survival-message");

let energieWert = 80;
let wissenWert = -10;
let koffeinWert = 70;
let nervenWert = 70;


lernenButton.addEventListener("click", function() {

	if (energieWert >= 10 && nervenWert >=10) {

		energieWert -= 10;
		wissenWert += 10;
		nervenWert -= 5;

		survivalMessage.textContent =
			"📚 Lernen erfolgreich! Dein Wissen steigt.";

	} else {

		survivalMessage.textContent =
			"😵 Du brauchst erst eine Pause oder Schwarztee!";

	}

	aktualisieren();

});

koffeinButton.addEventListener("click", function() {

	if (koffeinWert >= 10) {

		koffeinWert -= 10;
		energieWert += 10;
		nervenWert += 5;

		survivalMessage.textContent =
			"☕ Koffein aufgenommen. Der Pharmazeut ist wieder einsatzbereit!";

	} else {

		survivalMessage.textContent =
			"☕ Schwarzteevorrat erschöpft! Das ist kritisch.";

	}

	aktualisieren();

});


pauseButton.addEventListener("click", function() {

	energieWert += 15;
	nervenWert += 10;

	survivalMessage.textContent =
		"🛌 Pause erfolgreich. Es ist wichtig, dass du auf dich acht gibst.";

	aktualisieren();

});

function aktualisieren() {

	energie.textContent = energieWert;
	wissen.textContent = wissenWert;
	koffein.textContent = koffeinWert;
	nerven.textContent = nervenWert;

	if (wissenWert >= 100) {

		document.querySelector("#letzte-pruefung").style.display = "block";

	}

}


const frageNummer = document.querySelector("#frage-nummer");
const frageText = document.querySelector("#frage-text");
const antworten = document.querySelectorAll(".antwort");
const pruefungsErgebnis = document.querySelector("#pruefungs-ergebnis");

let aktuelleFrage = 0;
let richtigeAntworten = 0;

const fragen = [
	{
		frage: "Was ist die beste Medizin nach einem anstrengenden Tag?",
		antworten: [
				"Essen",
				"Meditieren",
				"Umarmung",
				"Noch mehr lernen"
		],
		richtig: 2
	},

	{
		frage: "Was darf bei einem gemeinsamen Abend niemals fehlen?",
		antworten: [
				"Unser Lieblingsessen",
				"Ein bestimmter Film",
				"Kuscheln",
				"Pizza Hawaii"
		],
		richtig: 3
	},

	{
		frage: "Wer von uns beiden würde eher einen Master in der Pharmazeutischen Technologie machen?", 
		antworten: [
				"Du",
				"Ich",
				"Wir beide",
				"Niemand von uns"
		],
		richtig: 0
	},

	{
		frage: "Welches erste Lied hast du mir mit der Gitarre vorgespielt?",
		antworten: [
				"Perfect-Ed Sheeran",
				"I Want It That Way-Backstreet Boys",
				"Can't Help Falling in Love-Elvis Presley",
				"Jooneh Khodet-Black Cats, Kamyar"
		],
		richtig: 2
	},

	{
		frage: "Wer ist Hugo?",
		antworten: [
				"Du",
				"Ich", 
				"EtOH",
				"Hamster"
		],
		richtig: 3
	}
];

function fragenAnzeigen() {

	console.log("FRAGE WIRD ANGEZEIGT:", aktuelleFrage);

	const aktuelleFrageDaten = fragen[aktuelleFrage];
	
	frageNummer.textContent =
		"Frage " + (aktuelleFrage + 1) + " von " + fragen.length;

	frageText.textContent =
		aktuelleFrageDaten.frage;

	antworten.forEach(function(button, index) {

		button.textContent =
				aktuelleFrageDaten.antworten[index];

	});

}

antworten.forEach(function(button, index) {

	button.addEventListener("click", function() {

		const richtigeAntwort =
			fragen[aktuelleFrage].richtig;

		console.log("Antwort geklickt!");
		console.log("Aktuelle Frage vorher:", aktuelleFrage);

		if (index === richtigeAntwort) {

			richtigeAntworten++;

			pruefungsErgebnis.textContent =
				"Richtig!";

		} else {
			pruefungsErgebnis.textContent =
				"Schlecht!";

		}

		aktuelleFrage++;

		console.log("Aktuelle Frage nachher:", aktuelleFrage);

		if (aktuelleFrage < fragen.length) {

			setTimeout(function() {

				pruefungsErgebnis.textContent = "";

				fragenAnzeigen();

			}, 1000);

		} else {
			pruefungAbgeschlossen();

		}

	});
});

function pruefungAbgeschlossen() {

	frageText.textContent =
		"Prüfung abgeschlossen!";

	frageNummer.textContent = 
		"Auswertung";

	pruefungsErgebnis.textContent = 
		"Du hast " + richtigeAntworten + 
		" von " + fragen.length +
		" Fragen richtig beantwortet. <3";

	antworten.forEach(function(button) {
		button.style.display = "none";
	});

}

fragenAnzeigen();
