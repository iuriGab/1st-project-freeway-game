//cow-actor
let xCow = 80; let yCow = 366;
let wCow = 30; let hCow = 30;
let cowVelocity = 6

let collision = false;

function cow(){
  image(cowImage, xCow, yCow, wCow, hCow);
}

function cowMoviment(){
  if (keyIsDown(UP_ARROW)){
    yCow -= cowVelocity;
  }
  if (keyIsDown(DOWN_ARROW)){
    yCow += cowVelocity;
  }
}

function cowCollide(){
  for (let i = 0; i < carsImages.length; i += 1){
    collision = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xCow, yCow, 15)
    if (collision){
      yCow = 366;
    }
  }
}