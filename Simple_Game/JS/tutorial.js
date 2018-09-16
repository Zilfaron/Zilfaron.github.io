var tutorial_lastG = document.querySelector(".tutorial__info .info__last-time"),
		tutorial_lastW = document.querySelector(".tutorial__info .info__last-scores"),
		tutorial_lastS = document.querySelector(".tutorial__info .info__last-game-speed"),
		start_btn			 = document.querySelector(".tutorial__start .start__btn"),
		tutorial 			 = document.querySelector(".game__tutorial"),
		waves_number	 = document.querySelector(".waves-number__select"),
		game_speed		 = document.querySelector(".game-speed__select");

tutorial_lastG.textContent = localStorage.getItem("last-game-time") || "-- / -- / --";
tutorial_lastW.textContent = localStorage.getItem("last-game-progress") || "0/0";
tutorial_lastS.textContent = localStorage.getItem("last-game-speed") || "------";

start_btn.addEventListener("click", function() {
	tutorial.hidden = true;
	game.start(waves_number.value, game_speed.value);

	localStorage.removeItem("last-game-time");
	localStorage.setItem("last-game-time", (new Date()).toLocaleString());

	localStorage.removeItem("last-game-speed");
	localStorage.setItem("last-game-speed", game_speed[game_speed.selectedIndex].textContent.replace(" (Recommended)", ""));		
});

window.addEventListener("keydown", function(evt) {
	if ( evt.keyCode == 83 && evt.ctrlKey ) {
		evt.preventDefault();
	}
});