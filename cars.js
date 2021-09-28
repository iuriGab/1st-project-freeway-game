//carsvariables
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96 ,150, 210, 270, 318];
let carsVelocity = [2, 2.5, 3.2, 5, 3.3, 2.3];
let wCars = 70; let hCars = 40;

function cars(){
  for (let i = 0; i < carsImages.length; i++){
    image(carsImages[i], xCars[i], yCars[i], wCars, hCars);
  }
}

function carsMoviment(){
  for (let i = 0; i < xCars.length; i++){
    xCars[i] -= carsVelocity [i];
  }
}

function returnCarsToBeginning(){
  for (let i = 0; i < carsImages.length; i++){
  if (carsPassToScreen(xCars[i])){
    xCars[i] = 600;
    }
  }
}

function carsPassToScreen(xCar){
  return xCar < -70;
}