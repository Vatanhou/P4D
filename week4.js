/*
    Paste the code for your week 4 exercise below.
*/
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100);
  background (0,0,7);
}

function drawLogo(x, y)
{
  strokeWeight(0);
  beginShape(TESS);
  vertex(x-300, y+300);
  vertex(x-150, y+300);
  vertex(x, y);
  vertex(x+150, y+300);
  vertex(x+300, y+300);
  vertex(x+100, y-150);
  vertex(x-100, y-150);
  endShape(CLOSE);
  fill(255, 0, 0);
  strokeWeight(25);
  noFill();
  stroke (0,0,7);
  beginShape(TESS);
  vertex(x+300, y-300);
  vertex(x+150, y-300);
  vertex(x, y);
  vertex(x-150, y-300);
  vertex(x-300, y-300);
  vertex(x-100, y+150);
  vertex(x+100, y+150);
  endShape(CLOSE);
}

function draw() 
{
  translate (windowWidth/2, windowHeight/2);
  fill (180,100,70)
  drawLogo(0,0)
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}