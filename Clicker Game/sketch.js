var score = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255)
  textSize(200);
  text(score, width/2, 150);
  if (mousePressed) {
      ellipse(width/2, height/2, 100, 100);
      score++;
  if (mouseReleased) {
    rect(width/2-50, height/2-50, 100, 100);
  }
  }
};
