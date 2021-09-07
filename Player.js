const {rpsls} = require('./gesture')

class Player{
    constructor(){
        this.name = "default";
        this.gestures = Object.keys(rpsls);
        this.chosenGesture = "";
        this.wins = 0;
    }

    chooseGesture(){
        //method to choose a gesture
    }
}

module.exports = Player;
