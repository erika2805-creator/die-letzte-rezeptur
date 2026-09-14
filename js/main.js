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
