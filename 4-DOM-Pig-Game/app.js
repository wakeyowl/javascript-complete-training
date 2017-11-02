/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice, dice;

init();
//dice = Math.floor((Math.random()) * 6) + 1;

document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function () {
    dice = Math.floor((Math.random()) * 6) + 1;
    console.log('lastDice: '+lastDice)
    console.log('Dice: '+dice)
    if (lastDice === 6 && dice === 6) {
        nextPlayer();
        console.log('two consecutive 6s, Tough Shit!!')
    } else {
        if (gamePlaying) {
            // Random No

            if (dice === lastDice) {
                nextPlayer();
            }

            // Display Result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';

            // Update Dice


            if (dice !== 1) {
                // add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }

        }
    }

    lastDice = dice;

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add Player scores
        scores[activePlayer] += roundScore;

        // Update the UI values
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check Winner

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }


});

function nextPlayer() {


    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    // Remove Winner Classes
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}

document.querySelector('.btn-new').addEventListener('click', init);


//Coding Chellenge

// 1 - Player loses ENTIRE score when rolling 2 6s in a row, after that next players turn

// 2 - Input the variable of sore to Win (use .value js property)

// 3 - Add a seond dice
