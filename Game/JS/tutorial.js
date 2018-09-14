var tutorial_lastG = document.querySelector(".tutorial__info .info__last-time"),
		tutorial_lastW = document.querySelector(".tutorial__info .info__last-scores"),
		start_btn			 = document.querySelector(".tutorial__start .start__btn"),
		tutorial 			 = document.querySelector(".game__tutorial");

tutorial_lastG.textContent = localStorage.getItem("last-game") || "-- / -- / --";
tutorial_lastW.textContent = localStorage.getItem("last-scores") || "0/30";

start_btn.addEventListener("click", function() {
	tutorial.hidden = true;
	game.start();
});