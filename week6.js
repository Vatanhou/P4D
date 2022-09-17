/*
    Paste the code for your week 3 exercise below.
*/
let inc = 1;
let sat = 0;
let move;
let i;
let logo = {};

function setup()
{
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL, 360, 100, 100);
    background (0,0,7);
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

for (logo.increase=650; logo.increase<1000; logo.increase++) {}

function draw()
{
    let c = color(180,sat,70)
    fill(c); 
    drawLogo(500,500);
    sat += inc;
    if(sat>=70 || sat<=0)
    {
        inc *= -1
    }
    

    // logo.x = mouseX;
    // logo.y = mouseY;
    move = frameCount%logo.increase;
    
    if (mouseIsPressed === true)
    {
        logo.x = mouseX;
        logo.y = mouseY;
    }
    noFill();
    stroke(0,0,7);
    strokeWeight(10);
    ellipse(logo.x,logo.y,move);
}


function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}