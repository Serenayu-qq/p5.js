function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
  
    // Set angle mode so that atan2() returns angles in degrees
    angleMode(DEGREES);
  
    describe('Two eyes that follow the cursor.');
  }
  
  function draw() {
    background(0);
  
    // Draw left eye
  
    let leftX = 350;
    let leftY = 400;
  
    // Calculate angle between left eye and mouse
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  
    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  
    // Draw right eye
  
    let rightX = 500;
    let rightY = 400;
  
    // Calculate angle between right eye and angle
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  
    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  }