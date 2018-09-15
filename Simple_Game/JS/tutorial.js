var tutorial_lastG = document.querySelector(".tutorial__info .info__last-time"),
		tutorial_lastW = document.querySelector(".tutorial__info .info__last-scores"),
		start_btn			 = document.querySelector(".tutorial__start .start__btn"),
		tutorial 			 = document.querySelector(".game__tutorial"),
		waves_number	 = document.querySelector(".waves-number__select");

tutorial_lastG.textContent = localStorage.getItem("last-game-time") || "-- / -- / --";
tutorial_lastW.textContent = localStorage.getItem("last-game-progress") || "0/0";

start_btn.addEventListener("click", function() {
	tutorial.hidden = true;
	game.start(waves_number.value);
});

window.addEventListener("keydown", function(evt) {
	if ( evt.keyCode == 83 && evt.ctrlKey ) {
		evt.preventDefault();
	}
});