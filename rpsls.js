const choices = ['ROCK', 'PAPER', 'SCISSORS', 'SPOCK', 'LIZARD'];
const icons = [
    "./images/hand-rock",
    "./images/hand-paper",
    "./images/hand-scissors",
    "./images/hand-spock",
    "./images/hand-lizard"
];

const shoot = () => {
    var player1_indx = Math.floor(Math.random() * 5);
    var player2_indx = Math.floor(Math.random() * 5);

    var player1_symbol = document.getElementById("symbol1");
    var player2_symbol = document.getElementById("symbol2");

    var icon1 = document.createElement("img");
    icon1.setAttribute("src", icons[player1_indx] + '.svg')

    var icon2 = document.createElement("img");
    icon2.setAttribute("src", icons[player2_indx] + '.svg')

    var label1 = document.getElementById("label1");
    var label2 = document.getElementById("label2");

    player1_symbol.append(icon1);
    player2_symbol.append(icon2);

    label1.append(choices[player1_indx]);
    label2.append(choices[player2_indx]);

    findWinner(player1_indx, player2_indx);
};

const findWinner = (indx1, indx2) => {
    var diff = (indx1 + 1) - (indx2 + 1);

    var ans = diff - (5 * Math.floor(diff / 5))

    if (ans == 0) {
        return
    }
    else if (ans % 2 == 0) {
        document.getElementById("player2").classList += " is-success";
        document.getElementById("player1").classList += " is-danger";
    }
    else {
        document.getElementById("player1").classList += " is-success";
        document.getElementById("player2").classList += " is-danger";

    }
};

const refresh = () => {
    location.reload();
};

document.addEventListener('DOMContentLoaded', (e) => {
    shoot();
});

const openModal = () => {
    var target = document.getElementById('rules');
    document.body.classList.add('is-clipped');
    target.classList.add('is-active');
};

const closeModal = () => {
    document.body.classList.remove('is-clipped');
    var target = document.getElementById('rules');
    target.classList.remove('is-active');
};
