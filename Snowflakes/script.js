(() => {
	let canvas	= document.querySelector(".flakes-area"),
				ctx		= canvas.getContext("2d");

	let settings = { // canvas settings
		bgColor: "#6D95E0",
		w: canvas.parentNode.offsetWidth,
		h: canvas.parentNode.offsetHeight
	};
	
	[canvas.width, canvas.height, canvas.style.backgroundColor] = [settings.w, settings.h, settings.bgColor];

	let snowflake = { // snowflake parameters
		minRadius: 3,
		maxRadius: 9,
		maxSpeed: 3,
		color: "rgba(255, 255, 255, 0.75)"
	};
	
	let maxSnowflakes = 50,
			snowflakes		= [];

	for (let i = 1; i <= maxSnowflakes; i++) {
		snowflakes.push({
			x: Math.random() * settings.w,
			y: Math.random() * settings.h,
			radius: Math.random() * (snowflake.maxRadius - snowflake.minRadius) + snowflake.minRadius,
			density: Math.random() * maxSnowflakes,
			speed: Math.random() * snowflake.maxSpeed
		});
	}	

	let drawSnowflakes = () => {
		ctx.clearRect(0, 0, settings.w, settings.h);
		ctx.fillStyle = snowflake.color;
		ctx.beginPath();

		for (let i = 0; i < snowflakes.length; i++) {
			let s = snowflakes[i]; // current item
			
			ctx.moveTo(s.x, s.y);
			ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2, true);
		}

		ctx.fill();
		updateSnowflakes();

		requestAnimationFrame(drawSnowflakes);
	}	

	let angle = 0;

	let updateSnowflakes = () => {
		angle += 0.01;

		for (let i = 0; i < snowflakes.length; i++) {
			let s = snowflakes[i]; // current item

			snowflakes[i].x += Math.cos(angle) + s.speed;
			snowflakes[i].y += Math.sin(angle) + s.speed * 2;

			if (s.x > settings.w + 15 || s.x < -15 || s.y > settings.h + 15) { // if snowflake isn't in the viewport
				snowflakes[i] = { ...snowflakes[i], x: Math.random() * (settings.w + 30) - 30, y: -15 }; // enter from left side
			}			
		}
	}

	requestAnimationFrame(drawSnowflakes);
})();