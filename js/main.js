const button = document.querySelector("#start-button");
const message = document.querySelector("#message");
const progressBar = document.querySelector("#progress-bar");
const nextButton = document.querySelector("#next-button");

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
});
