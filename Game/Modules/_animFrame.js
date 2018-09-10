// Cross-browser animation frame
window.requestAnimFrame = window.requestAnimationFrame 			 ||
               		 				window.mozRequestAnimationFrame    ||
               		 				window.webkitRequestAnimationFrame ||
               		 				window.oRequestAnimationFrame      ||
               		 				window.msRequestAnimationFrame;﻿