//scoreVariables
let myScore = 0;

function scoreBoard(){
    fill(color(44, 62, 80));
    rect(65, 6, 35, 25);
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 254, 0));
    text(myScore, 83, 27);
}

function toScore(){
    if (yCow < 12){
        myScore += 1
        returnCowToBeginning();
    }
}