const 
		  // Getting the canvas element
		  CANVAS = document.getElementById("canvas");

CANVAS.hidden = true;		  

// Player class
class Player {
	constructor(field, width = 100, height = 100) {
		this.width = Math.min(width, 200);
		this.height = Math.min(height, 200);

		// The game window in which this player
		this.field = field;

		// Координаты игрока на холсте
		this.x = this.field.width / 2 - this.width / 2; // The X coordinate in the middle of the canvas
		this.y = this.field.height - this.height - 50; // The Y coordinate at the bottom of the canvas
	}

	// Position the player on the canvas
	position() {
		this.field.ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	// The player move function
	move(coord_x) {
		this.field.ctx.clearRect(this.x, this.y, this.width, this.height);

		this.x = coord_x;

		this.field.ctx.fillRect(coord_x, this.y, this.width, this.height);
	}
}


// Game window class
class Game {
	constructor(el, width, height) {
		// The canvas element and context
		this.canvas = el;
		this.ctx = canvas.getContext("2d");

		this.started = false;

		// If the width or height is larger than the window then, reduce it
		this.width = width > window.innerWidth - 10 ? window.innerWidth - 10 : width;
		this.height = height > window.innerHeight - 10 ? window.innerHeight - 10 : height;

		// Player of game window
		this.player = new Player(this, 100, 100);

		// Number of waves
		this.waves;
		this.current_wave = -3;

		this.waves_duration = 1000;

		this.anim_frame;
		this.wave_interval;
	}

	// Set the width and height of the canvas
	expand() {
		this.canvas.setAttribute("width", this.width);
		this.canvas.setAttribute("height", this.height);
	}

	// Function for clear the canvas
	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	// Start the game
	start(wn, gs) {
		if (this.started) {
			return false;
		}

		this.clear();

		this.canvas.hidden = false;

		this.waves = wn; // Waves number
		this.waves_duration = gs; // Game speed

		this.started = true;
		tutorial.hidden = true;

		// Expand the canvas
		this.canvas.classList.remove("canvas_scaled");

		var self = this;

		this.player.position();

		// Moving the player with the mouse cursor
		document.onmousemove = function(evt) {
			if (self.started) {
				// Find the new X coordinate
				var new_x = evt.pageX - window.innerWidth / 2 - self.player.width / 2 + self.width / 2 + 10;

				// If player leaves the canvas, return it
				if (new_x <= 0) {
					new_x = 0;
				} else if (new_x + self.player.width >= self.canvas.width) {
					new_x = self.canvas.width - self.player.width;
				}

				self.player.move(new_x);
			}				
		};

		setTimeout( function() {

			self.wave_interval = setInterval( function() {
				self.nextWave();
			}, self.waves_duration);

		}, 1000);
	}

	nextWave() {
		var self = this;

		if (this.current_wave >= this.waves) { // Check for win
			this.win();
			return false;
		}

		var objects_y = -20,
				safe_area = Math.min( Math.round( (Math.random() * this.canvas.width) / 10) * 10, this.canvas.width - this.player.width - 20 );

		if ((safe_area / 10) % 2) {
			safe_area -= 10;
		}		

		function frame() {
			// if player and objects coordinates are valid, then initialize lose method
			var lose_X = self.player.x < safe_area || self.player.x > safe_area + 40,
					lose_Y = objects_y > self.player.y - 20 && objects_y < self.player.y + self.player.height;

			if (lose_X && lose_Y) {
				if (self.started) {
					self.started = false;
					objects_y = -20;
					self.lose();
				}
			} else {
				self.ctx.clearRect(0, objects_y, safe_area, 30);
				self.ctx.clearRect(safe_area + self.player.width + 40, objects_y, self.canvas.width, 30);
				objects_y += 5;
				for (let i = 0; i <= self.canvas.width - 20; i += 20) {
					if (i < safe_area || i >= safe_area + self.player.width + 40) {
						self.ctx.fillRect(i, objects_y, 20, 30);
					} else continue;
				}			
				if (objects_y <= self.canvas.height) {
					window.requestAnimFrame(frame);
				} else {
					window.cancelAnimFrame(self.anim_frame);
				}
			}
		}
		this.anim_frame = window.requestAnimFrame(frame);

		this.current_wave++;
	}

	win() {
		alert("You win :)");
		this.reset();
	}

	lose() {
		document.onmousemove = null;
		var game_result = this.current_wave < 0 ? 0 : this.current_wave;		
		alert("You lose :(");
		alert(`Waves: ${game_result}/${this.waves}`);
		this.reset();
	}

	reset() {
		var game_result = this.current_wave < 0 ? 0 : this.current_wave;
		localStorage.removeItem("last-game-progress");
		localStorage.setItem("last-game-progress", `${game_result}/${this.waves}`);		
		updateInfo();
		tutorial.hidden = false;
		this.clear();
		this.canvas.classList.add("canvas_scaled");
		this.started = false;
		document.onmousemove = null;
		this.current_wave = -3;
		clearInterval(this.wave_interval);
		start_btn.setAttribute("disabled", "");
		start_btn.setAttribute("title", "Please wait");
		setTimeout( function() {
			start_btn.removeAttribute("disabled");
			start_btn.removeAttribute("title");
		}, 2000);		
	}
}

var game = new Game(CANVAS, window.innerWidth, window.innerHeight);
game.expand();