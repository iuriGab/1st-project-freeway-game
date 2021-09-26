//cow-actor
let xCow = 80; let yCow = 366;
let wCow = 30; let hCow = 30;
let cowVelocity = 6

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