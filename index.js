function playDice(){
    function rollDice(dice){
        /* Roll the dice */

        var randomNumber = Math.floor(Math.random() * 6) + 1;

        switch (randomNumber){
            case 1:
                dice.setAttribute("src", "images/dice1.png");
                break;
            case 2:
                dice.setAttribute("src", "images/dice2.png");
                break;
            case 3:
                dice.setAttribute("src", "images/dice3.png");
                break;
            case 4:
                dice.setAttribute("src", "images/dice4.png");
                break;
            case 5:
                dice.setAttribute("src", "images/dice5.png");
                break;
            case 6:
                dice.setAttribute("src", "images/dice6.png");
                break;
        }

        return randomNumber;
    }

    var player1 = prompt("Insert name of player 1");
    var player2 = prompt("Insert name of player 2");

    // change player1 and player2 text to players name
    document.querySelector(".player1").textContent = player1.charAt(0).toUpperCase() + player1.slice(1);
    document.querySelector(".player2").textContent = player2.charAt(0).toUpperCase() + player2.slice(1);

    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");

    var rollDice1 = rollDice(dice1);
    var rollDice2 = rollDice(dice2);

    if (rollDice1 > rollDice2){
        document.querySelector("h1").textContent = player1.charAt(0).toUpperCase() + player1.slice(1) + " win!";
        document.querySelector(".player1").classList.add("win-animation");
    } else if (rollDice1 === rollDice2){
        document.querySelector("h1").textContent = "Draw";
        document.querySelector(".player1").classList.add("win-animation");
        document.querySelector(".player2").classList.add("win-animation");
    } else {
        document.querySelector("h1").textContent = player2.charAt(0).toUpperCase() + player2.slice(1) + " win!";
        document.querySelector(".player2").classList.add("win-animation")
    }
}

document.querySelector("button").addEventListener('click', playDice);