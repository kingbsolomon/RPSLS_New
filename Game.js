const prompt = require('prompt-sync')();
const AI = require('./AI');
const Human = require('./Human');
const {rpsls, msg} = require('./gesture');


class Game{
    constructor(){
        this.playerOne = new Human("Player One");
        this.playerTwo = null;
    }

    runGame(){
        console.log(msg.welcome)
        this.gameChoice();
        this.battle();
        this.playAgain();
    }

    gameChoice(){
        console.log("What type of game would you like to play?");
        console.log("1. Computer vs. Human\n2. Human vs. Human");
        let gameType = prompt();
        switch(gameType){
            case '1':
                this.playerTwo = new AI();
                break;
            case '2':
                this.playerTwo = new Human("Player Two");
                break;
            default:
                console.log("Invalid Selection!");
                return this.gameChoice();
        }
    }

    battle(){
        let player1 = this.playerOne;
        let player2 = this.playerTwo;

        while(player1.wins < 2 && player2.wins < 2){
            player1.chooseGesture();
            player2.chooseGesture();
            this.displayPicks();

            let p1Gesture = player1.chosenGesture;
            let p2Gesture = player2.chosenGesture;

            if(p1Gesture === p2Gesture) console.log("It's a Tie!");
            else if(rpsls[p1Gesture].losesTo.includes(p2Gesture)){
                let index = rpsls[p1Gesture].losesTo.indexOf(p2Gesture);
                console.log(rpsls[p1Gesture].messages[index]);
                player2.wins++;
            }
            else{
                let index = rpsls[p2Gesture].losesTo.indexOf(p1Gesture);
                console.log(rpsls[p2Gesture].messages[index]);
                player1.wins++;
            }
            this.displayWins();
        }
    }

    displayPicks(){
        let {name: name1, chosenGesture: chosen1} = this.playerOne
        let {name: name2, chosenGesture: chosen2} = this.playerTwo
        console.log(`${name1} chose ${chosen1}`);
        console.log(`${name2} chose ${chosen2}`);
    }

    displayWins(){
        let {name: name1, wins: wins1} = this.playerOne
        let {name: name2, wins: wins2} = this.playerTwo
        console.log(`${name1}: ${wins1}`);
        console.log(`${name2}: ${wins2}`);

    }

    playAgain(){
        this.playerOne.wins = 0;
        console.log("Would you like to play again? Y or N?")
        let choice = prompt().toLowerCase();
        ['y', 'yes'].includes(choice) ? this.runGame() : console.log("Thanks for Playing!!")
    }
}

module.exports = Game;