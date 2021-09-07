const Player = require('./Player');

class AI extends Player{
    constructor(){
        super();
        this.name = "R2D2";
    }

    chooseGesture(){
        let gest = this.gestures;
        let numChosen = Math.floor(Math.random()*gest.length)
        this.chosenGesture = gest[numChosen];
    }
}

module.exports = AI