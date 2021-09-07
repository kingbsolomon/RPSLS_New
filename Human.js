const prompt = require('prompt-sync')();
const Player = require('./Player');

class Human extends Player{
    constructor(playerNum){
        super();
        this.getName(playerNum);
    }

    getName(playerNum){
        console.log(`What is your name ${playerNum}?`);
        this.name = prompt();
    }

    printGestures(){
        let gest = this.gestures;
        console.log(`${this.name} Please choose a gesture!`);
        for(let i=0; i<gest.length; i++){
            console.log(`${i+1}: ${gest[i]}`);
        }
    }

    chooseGesture(){
        this.printGestures();
        let numChosen = prompt();
        if(!numChosen.match(/^[1-5]$/)){
            console.log("Please make a valid selection!");
            this.chooseGesture();
        }
        else this.chosenGesture = this.gestures[numChosen-1];
    }
}
module.exports = Human;
