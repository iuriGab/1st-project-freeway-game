function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(streetImage);
  cow();
  cowMoviment();
  cars();
  carsmoviment();
  returnCarsToBeginning();
  cowCollide();
}