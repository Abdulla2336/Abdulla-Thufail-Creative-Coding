function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Background color
  background(14,144,181);
  
  // Car body
  fill(255, 204, 0);
  rect(50,250,100,50); 
  
  // Car roof
  fill(255, 204, 0);
  rect(90,220,20,30);
  
  // Car front
  fill(255, 204, 0);
  triangle(150,250,200,300,150,300); 
  
  // Windshield
  fill(135, 206, 235, 150);
  beginShape();
  vertex(150, 250);
  vertex(200, 300);
  vertex(150, 300);
  endShape(CLOSE);
  
  // Left tire
  fill(77);
  ellipse(75,300, 35, 35); 
  
  // Right tire
  fill(77);
  ellipse(135,300, 35, 35); 
  
  // Adding some details
  
  // Left window
  fill(135, 206, 235);
  rect(95, 225, 10, 15);
  
  // Right window
  fill(135, 206, 235);
  rect(115, 225, 10, 15);
  
  // Headlights
  fill(255, 255, 0);
  ellipse(200, 265, 15, 15);
  
  // Tail lights
  fill(255, 0, 0);
  ellipse(55, 265, 15, 15);
}
