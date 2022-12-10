var canvas = document.getElementById("Mycanvas");
var pong = canvas.getContext("2d");
canvas.width =
  /*Building rectangles
pong.beginPath();
pong.rect(20, 40, 50, 50);
pong.fillStyle = "blue";
pong.fill();
pong.closePath();

pong.beginPath();
pong.arc(240,160,20,0,Math.PI*2, false);
pong.fillStyle = "green";
pong.fill();
pong.closePath();

pong.beginPath();
pong.rect(160,10,100,40);
pong.strokeStyle = "rgba(0, 0, 255,0.5)";
pong.stroke();
pong.closePath();*/

  canvas.width = 900;
canvas.height = 600;

// variables for the ball
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = 2;
var ballRadius = 10;

// variables for paddles
var paddleHeight = 10;
var paddleWidth = 90;
var paddleX = (canvas.width - paddleWidth) / 2;

//variables for controlling the paddles
var rightPressed = false;
var leftPressed = false;
var rightKey = false;
var leftKey = false;

// setting up the brick variables
var brickRowCount = 7;
var brickColumnCount = 10;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 50;
var brickOffsetLeft = 30;

//Creating the score function
var score = 0;

//variables for the second paddle
var paddleWidth2 = 10;
var paddleHeight2 = 90;
var paddleX2 = 0;
var paddleY2 = (canvas.height - paddleHeight) / 2;

// creating the 2d array for the bricks
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

// For pressing of keys
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// function to run the keys
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
  if (e.keyCode == 68) {
    rightKey = true;
  } else if (e.keyCode == 65) {
    leftKey = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
  if (e.keyCode == 68) {
    rightKey = false;
  } else if (e.keyCode == 65) {
    leftKey = false;
  }
}
console.log(keyDownHandler);

//function for collision detection
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
        }
      }
    }
  }
}

// drawing the bricks
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        pong.beginPath();
        pong.rect(brickX, brickY, brickWidth, brickHeight);
        pong.fillstyle = "yellow";
        pong.fill();
        pong.closePath();
      }
    }
  }
}

//drawing the ball on the canvas
function drawBall() {
  pong.beginPath();
  pong.arc(x, y, ballRadius, Math.PI * 2, false);
  pong.fillStyle = "red";
  pong.fill();
  pong.closePath();
}

//drawing the paddle on the canvas
function drawPaddles() {
  pong.beginPath();
  pong.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  pong.rect(paddleX2, paddleY2, paddleWidth2, paddleHeight2);
  pong.fillStyle = "black";
  pong.fill();
  pong.closePath();
}
console.log(drawPaddles);

//function for the scores
function drawScore() {
  pong.font = "16px Arial";
  pong.fillStyle = "#FFA07A";
  pong.fillText("Score:" + score, 8, 20);
  pong.closePath();
}

//making the ball move
function draw() {
  pong.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddles();
  drawScore();
  collisionDetection();

  if (x + ballRadius > canvas.width) {
    dx = -dx;
  } else if (x - ballRadius < 0) {
    if (y > paddleY2 && y < paddleY2 + paddleHeight2) {
      dx = -dx;
    } else {
      alert("TRY HARDER NEXT TIME, LOSER");
      document.location.reload();
      clearInterval(interval); // Ends game
    }
  }

  if (y - ballRadius < 0) {
    dy = -dy;
  } else if (y + ballRadius > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("TRY HARDER NEXT TIME, LOSER");
      document.location.reload();
      clearInterval(interval); // Ends game
    }
  }

  //making the paddle move
  if (rightPressed) {
    paddleX += 4;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 4;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  if (rightKey) {
    paddleY2 += 4;
    if (paddleY2 + paddleHeight2 > canvas.height) {
      paddleY2 = canvas.height - paddleHeight2;
    }
  } else if (leftKey) {
    paddleY2 -= 4;
    if (paddleY2 < 0) {
      paddleY2 = 0;
    }
  }

  x += dx;
  y += dy;
}

var interval = setInterval(draw, 10);

/*
var paddleWidth2 = 10;
var paddleHeight2 = 90;
var paddleX2 = 0;
var paddleY2 = (canvas.height - paddleHeight)/2;
//for the second rectangle
pong.rect(paddleX2, paddleY2, paddleWidth2, paddleHeight2);

//making the ball recognize the second paddle
if(x - ballRadius < 0){
    else if (y > paddleY2 && y < paddleY2 + paddleHeight2)
    dx = -dx;
}

//making the second paddle move 
if (rightPressed) {
    paddleY2 += 4;
    if(paddleY2 + paddleHeight2 > canvas.height) {
        paddleY2 = canvas.height - paddleHeight2;
    }else if (leftPressed) {
        paddleY2 -= 4;
        if (paddleY2 < 0) {
            paddleY2 = 0;
        }
    }
}*/
