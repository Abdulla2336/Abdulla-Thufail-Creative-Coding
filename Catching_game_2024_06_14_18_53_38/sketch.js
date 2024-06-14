let screen = 0;
let y = -20;
let x = 200;
let speed = 2;
let score = 0;
let gameStarted = false;
let gameOver = false;
let catcherWidth = 100;
let catcherHeight = 20;
let catcherColor;
let ballColor;
let backgroundColor;
let obstacleColor;
let obstacles = [];
let obstacleSpeed = 2;
let obstacleFrequency = 0.01;

function setup() {
  createCanvas(600, 400);
  catcherColor = color(255, 204, 0); // Yellow
  ballColor = color(255, 100, 100); // Red
  backgroundColor = color(0, 153, 204); // Blue
  obstacleColor = color(0, 255, 0); // Green
}

function draw() {
  background(backgroundColor);
  if (screen === 0) {
    startScreen();
  } else if (screen === 1) {
    if (!gameStarted) {
      reset();
      gameStarted = true;
    }
    gameOn();
  } else if (screen === 2) {
    endScreen();
  }
}

function startScreen() {
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text('WELCOME TO THE CATCHING GAME', width / 2, height / 2 - 20);
  textSize(16);
  text('Click anywhere to start', width / 2, height / 2 + 20);
}

function gameOn() {
  if (!gameOver) {
    drawCatcher();
    drawBall();
    moveBall();
    drawObstacles();
    moveObstacles();
    checkCollision();
    updateScore();
    drawScore();
  } else {
    screen = 2;
  }
}

function endScreen() {
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text('GAME OVER', width / 2, height / 2 - 20);
  textSize(16);
  text('Your Score: ' + score, width / 2, height / 2 + 20);
  textSize(14);
  text('Click to play again', width / 2, height / 2 + 50);
}

function drawCatcher() {
  fill(catcherColor);
  rect(mouseX - catcherWidth / 2, height - catcherHeight, catcherWidth, catcherHeight);
}

function drawBall() {
  fill(ballColor);
  ellipse(x, y, 20, 20);
}

function moveBall() {
  y += speed;
  if (y > height) {
    gameOver = true;
  }
}

function drawObstacles() {
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obstacle = obstacles[i];
    fill(obstacleColor);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

function moveObstacles() {
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].y += obstacleSpeed;
    if (obstacles[i].y > height) {
      obstacles.splice(i, 1);
    }
  }
  if (random() < obstacleFrequency) {
    let obstacleWidth = random(30, 100);
    let obstacleHeight = random(20, 50);
    let obstacleX = random(obstacleWidth / 2, width - obstacleWidth / 2);
    let obstacleY = -obstacleHeight;
    obstacles.push({
      x: obstacleX,
      y: obstacleY,
      width: obstacleWidth,
      height: obstacleHeight
    });
  }
}

function checkCollision() {
  // Check if the ball hits the bottom of the canvas
  if (y > height) {
    gameOver = true;
    return;
  }
  
  // Check if the ball hits the catcher
  if (y + 10 >= height - catcherHeight && x >= mouseX - catcherWidth / 2 && x <= mouseX + catcherWidth / 2) {
    y = height - catcherHeight - 10; // Prevent ball from going inside the catcher
    speed *= -1; // Reverse the ball's direction
    score++; // Increase the score
    return;
  }
  
  // Check if the ball hits any obstacle
  for (let obstacle of obstacles) {
    if (y >= obstacle.y && y <= obstacle.y + obstacle.height && x >= obstacle.x && x <= obstacle.x + obstacle.width) {
      gameOver = true;
      break;
    }
  }
}

function updateScore() {
  score++;
  speed += 0.02;
}

function drawScore() {
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text('Score: ' + score, 20, 30);
}

function mousePressed() {
  if (screen === 0 || screen === 2) {
    screen = 1;
    gameOver = false;
    gameStarted = false;
    obstacles = [];
  }
}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
}
