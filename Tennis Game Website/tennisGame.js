			
			var canvas;
			var canvasContext;
			var ballX = 400;
			var ballSpeedX =10;
			var ballY = 100;
			var ballSpeedY =4;
		
			var paddle1Y = 250;
			const PADDLE_HEIGHT = 100;

			//sumusunod na paddle sa mouse
			function calculateMousePos(evt)
			{
				var rect = canvas.getBoundingClientRect();
				var root = document.documentElement;
				var mouseX = evt.clientX - rect.left - root.scrollLeft;
				var mouseY = evt.clientY - rect.top - root.scrollTop;

				return 
				{
					x:mouseX,
					y:mouseY
				
				};


			}

//nagaexecute ng game
			window.onload = function() 
			{
					canvas = document.getElementById('gameCanvas');
					canvasContext = canvas.getContext('2d');

					//motion part per frame
					var framePerSecond = 30;
					setInterval(function() {drawEverything(); moveBall();}, 1000/framePerSecond);


					canvas.addEventListener('mousemove', 
						function(evt)
						{
							var mousePos = calculateMousePos(evt);
							paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
						});
					
					

			}
//motion ng ball
			function moveBall()
			{
				ballX = ballX + ballSpeedX;
				ballY = ballY + ballSpeedY;

				//motion side to side
				if (ballX > canvas.width)
				{
					ballSpeedX = -ballSpeedX;
				}

				if (ballX < 0)
				{
					ballSpeedX = -ballSpeedX;
				}
				//motion up and down
				if (ballY > canvas.height)
				{
					ballSpeedY = -ballSpeedY;
				}

				if (ballY < 0)
				{
					ballSpeedY = -ballSpeedY;
				}
			}
//yung mga bagay sa screen
			function drawEverything()
			{
				//background
				canvasContext.fillStyle = 'black';
				canvasContext.fillRect(0,0,canvas.width,canvas.height);

				//the ball
				canvasContext.fillStyle = 'red';
				canvasContext.beginPath();
				canvasContext.arc(ballX, ballY, 10, 0, Math.PI*2, true);
				canvasContext.fill();

				//left paddle
				canvasContext.fillStyle = 'white';
				canvasContext.fillRect(20,paddle1Y,10,PADDLE_HEIGHT);
			}