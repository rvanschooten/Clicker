function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  ellipse(width/2, height/2, 80, 100);
  if (mouseIsPressed)
    ellipse(50, 50, 50, 50);
  else
    rect(25, 25, 50, 50);

  print(mouseIsPressed);

}
