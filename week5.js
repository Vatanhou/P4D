/*
    Paste the code for your week 5 exercise below.
*/
let inc = 1;
let sat = 0;
let move;
let i;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL, 360, 100, 100);
    background (0,0,7);
    // background (0,0,0);
}

function drawLogo(x,y)
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
    // erase(0, 255);
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
    // noErase();
}

function drawcircle(x,y,i)
{
    noFill();
    stroke(0,0,7);
    strokeWeight(10);
    ellipse(x,y,i);
}

for (i=650; i<1000; i++) {}

function draw()
{
    translate (windowWidth/2, windowHeight/2);
    let c = color(180,sat,70)
    fill(c); 
    drawLogo(0,0);
    move = frameCount%i;
    drawcircle (0,0,move);
    sat += inc;
    if(sat>=70 || sat<=0)
    {
        inc *= -1
    }
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}