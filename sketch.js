function setup() {
  createCanvas(500, 400);
  soundBackground.loop();
}

function draw() {
  background(streetImage);
  cow();
  cowMoviment();
  cars();
  carsMoviment();
  returnCarsToBeginning();
  cowCollide();
  scoreBoard();
  toScore();
}