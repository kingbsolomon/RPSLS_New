const rpsls = {
    "Rock": {
        losesTo: ['Paper', 'Spock'],
        messages: ["Paper Covers Rock","Spock Vaporizes Rock"]
    },
    "Paper": {
        losesTo: ['Scissors', 'Lizard'],
        messages: ["Scissors Cut Paper","Lizard Eats Paper"]
    },
    "Scissors": {
        losesTo: ['Rock', 'Spock'],
        messages: ["Rock Crushes Scissors","Spock Smashes Scissors"]
    },
    "Lizard": {
        losesTo: ['Rock', 'Scissors'],
        messages: ["Rock Crushes Lizard","Scissors Decapitates Lizard"]
    },
    "Spock": {
        losesTo: ['Paper', 'Lizard'],
        messages: ["Paper Disproves Spock","Lizard Poisons Spock"]
    }
}

const msg = {
    welcome: "Welcome to RPSLS! The rules are Rock crushes Scissors Scissors cuts Paper Paper covers Rock Rock crushes Lizard Lizard poisons Spock Spock smashes Scissors Scissors decapitates Lizard Lizard eats Paper Paper disproves Spock Spock vaporizes Rock"
}

module.exports = {rpsls, msg}