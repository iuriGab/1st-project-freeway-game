//carsvariables
let xCars = [600, 600, 600];
let yCars = [40, 96 ,150]
let carsVelocity = [2, 2.5, 3.2]
let wCars = 70; let hCars = 40;

function cars(){
  for (let i = 0; i < carsImages.length; i += 1){
    image(carsImages[i], xCars[i], yCars[i], wCars, hCars);
  }
}

function carsmoviment(){
  for (let i = 0; i < xCars.length; i += 1){
    xCars[i] -= carsVelocity [i];
  }
}

function returnCarsToBeginning(){
  if (xCars[0] < -70){
    xCars[0] = 600
  }
  if (xCars[1] < -70){
    xCars[1] = 600
  }
  if (xCars[2] < -70){
    xCars[2] = 600
  }
}


