//varImages&Sounds
let cowImage;
let streetImage;
let greenCarImage; let yellowCarImage; let blackCarImage;

let soundBackground;
let soundCollide;
let soundScore;

function preload(){
  cowImage = loadImage("images/ator-1.png");
  streetImage = loadImage("images/estrada.png");
  greenCarImage = loadImage("images/carro-1.png");
  yellowCarImage = loadImage("images/carro-3.png");
  blackCarImage = loadImage("images/carro-2.png");
  carsImages = [greenCarImage, yellowCarImage, blackCarImage, greenCarImage, yellowCarImage, blackCarImage];

  soundBackground = loadSound("sounds/trilha.mp3");
  soundCollide = loadSound("sounds/colidiu.mp3");
  soundScore = loadSound("sounds/pontos.wav");
}
