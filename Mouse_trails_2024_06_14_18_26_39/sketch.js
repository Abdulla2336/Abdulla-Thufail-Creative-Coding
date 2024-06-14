function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  colorMode(HSB); // Use HSB color mode for rainbow colors
}

// Function to draw circles with rainbow colors when the mouse is dragged
function mouseDragged() {
  // Generate a random hue for rainbow effect
  let hue = random(0, 360);
  
  // Set the fill color with full saturation and brightness for vivid colors
  fill(hue, 100, 100);
  
  // Draw the circle at the mouse position
  circle(mouseX, mouseY, 100);
}
