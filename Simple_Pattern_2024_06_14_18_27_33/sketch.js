var rows = 20;
var cols = 20;
var distanceX = 30;
var distanceY = 30;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB); // Use HSB for easy rainbow color generation
  drawPattern();
}

function drawPattern() {
  background(0);
  noStroke();
  rectMode(CENTER);

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      
      // Generate a random hue for rainbow effect
      var hue = random(0, 360);
      fill(hue, 100, 100); // Full saturation and brightness for vivid colors

      // Randomize size between 10 and 30
      var size = random(10, 30);
      
      // Randomize shape choice
      var shape = floor(random(0, 2));
      
      // Draw shape based on random choice
      if (shape == 0) {
        ellipse(c * distanceX, r * distanceY, size, size);
      } else {
        drawTriangle(c * distanceX, r * distanceY, size);
      }
    }
  }
}

// Function to draw an equilateral triangle
function drawTriangle(x, y, size) {
  var h = size * sqrt(3) / 2; // Height of the equilateral triangle
  triangle(
    x, y - h / 2,
    x - size / 2, y + h / 2,
    x + size / 2, y + h / 2
  );
}

// Trigger the pattern drawing when the mouse is pressed
function mousePressed() {
  drawPattern();
}
