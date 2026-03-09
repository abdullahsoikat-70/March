// CUSTOM VARIABLE: Tracks the power level of the character
var mango = 20; 

function setup() {
  createCanvas(500, 500); 
}

function draw() {
  // A clean, deep space background
  background(20, 30, 50); 

  // CHARACTER ELEMENTS 
  
  // The Main Energy Aura (Grows with mango)
  stroke(255, 255, 127);
  strokeWeight(3);
  fill(255, 255, 127, 100); // Transparent yellow
  ellipse(width/2, height/2, mango, mango);

  // The Internal Moving Parts (Rectangles inside the circle)
  // We use random() but keep the position relative to the center
  fill(210, 180, 230);
  noStroke();
  
  // These rectangles move only within the bounds of the 'mango' size
  let innerOffset = mango / 4;
  rect(width/2 + random(-innerOffset, innerOffset), height/2 + random(-innerOffset, innerOffset), 15, 15);
  rect(width/2 + random(-innerOffset, innerOffset), height/2 + random(-innerOffset, innerOffset), 10, 10);

  //  The Mouse Follower (The "Pilot")
  fill(254, 12, 186);
  ellipse(mouseX, mouseY, 15, 15);
  
  // Connect the Pilot to the Core with a "Power Line"
  stroke(254, 12, 186, 150);
  strokeWeight(2);
  line(mouseX, mouseY, width/2, height/2);

  // TEXT & UI 
  fill(255);
  noStroke();
  textFont('Courier');
  textSize(18);
  text("SOLAR FLARE ACTIVE", 20, 40);
  
}

// INTERACTIVITY: Increases the mango variable until it hits a limit
function mousePressed() {
  if (mango >= 400) {
    mango = 20; // Reset if too big
  } else {
    mango = mango + 20; // Grow significantly on each click
  }
}