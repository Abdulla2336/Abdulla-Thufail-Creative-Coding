function setup() {
  createCanvas(500, 500);
  background(50); // Darker background
}

function draw() {
  // Antenna
  fill(255, 204, 0); // Yellow antenna
  rect(250, 60, 5, 40); // Changed to a rectangle
  fill(255);
  ellipse(252, 58, 15, 15); // Changed to an ellipse

  // Body
  fill(128, 0, 128); // Purple body
  rect(200, 200, 100, 150); // Wider body

  // Head
  fill(255, 204, 0); // Yellow head
  ellipse(250, 120, 120, 120); // Slightly bigger head

  // Eyes
  fill(0); // Black eyes
  ellipse(230, 120, 30, 30); // Slightly smaller eyes
  ellipse(270, 120, 30, 30); // Slightly smaller eyes

  // Feet
  fill(255, 204, 0); // Yellow feet
  ellipse(220, 350, 50, 20); // Adjusted feet position and size
  ellipse(280, 350, 50, 20); // Adjusted feet position and size

  // Arms
  fill(255, 204, 0); // Yellow arms
  rect(190, 220, 20, 100); // Adjusted arms position and size
  rect(290, 220, 20, 100); // Adjusted arms position and size

  // Triangle
  fill(128, 0, 128); // Purple triangle
  triangle(230, 240, 270, 240, 250, 280); // Adjusted triangle position
}
