function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255)
  if (mouseIsPressed)
    ellipse(width/2, height/2, 100, 100);
  else
    rect(width/2-50, height/2-50, 100, 100);

  print(mouseIsPressed);

}
