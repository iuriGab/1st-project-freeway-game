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
  for (let i = 0; i < carsImages.length; i += 1)
  if (carsPassToScreen(xCars[i])){
    xCars[i] = 600
}

function carsPassToScreen(xCar){
  return xCar < -70
}