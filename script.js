const gameTile = document.querySelectorAll('.game-tile');
const changeName = document.querySelector('#change-name');

let gameEnd = false;

let gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];

let turn = 'x';

const Player = (choice, name) => {
    return { choice, name }
}

let playerOne = Player('x', 'Player One');
let playerTwo = Player('circle', 'Player Two');

function getUserInput() {
    if (document.getElementById('player-two').value && document.getElementById('player-one').value) {
        playerOne.name = document.getElementById('player-one').value;
        playerTwo.name = document.getElementById('player-two').value;
        
    }

    document.getElementById('player-one').value = '';
    document.getElementById('player-two').value = '';
}

changeName.addEventListener('click', () => {
    
    getUserInput();

    if (gameEnd == true) {
        gameTile.forEach(tile => {
            tile.style.backgroundImage = null;
            tile.classList = 'game-tile';
            turn = playerOne.choice;

            document.getElementById('dynamic-text').textContent = 'Let\'s play';

            if (document.getElementById('player-two').value && document.getElementById('player-one').value) {
                getUserInput();
            }
        });

        gameEnd = false;
    }
});

document.addEventListener('click', e => {
    if (e.target.classList == 'game-tile') {
        e.target.classList = 'changed-tile';
        if (turn == 'x' && gameEnd == false) {
            e.target.style.backgroundImage = "url('images/x1.png')";
            const boardIdOne = e.target.id.slice(-2, -1);
            const boardIdTwo = e.target.id.slice(-1);
            
            turn = 'circle';

            gameBoard[boardIdOne][boardIdTwo] = 'x';            
            if (gameEnd == false) {
                checkForResult();
            }
        } else if (turn == 'circle' && gameEnd == false) {
            e.target.style.backgroundImage = "url('images/circle1.svg')";
            const boardIdOne = e.target.id.slice(-2, -1);
            const boardIdTwo = e.target.id.slice(-1);
            
            turn = 'x';

            gameBoard[boardIdOne][boardIdTwo] = 'circle';
            if (gameEnd == false) {
                checkForResult();
            }
        }
    }
});

function checkForResult() {
    
    if (gameBoard[0][0] == 'x' && gameBoard[0][1] == 'x' && gameBoard[0][2] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    } else if (gameBoard[1][0] == 'x' && gameBoard[1][1] == 'x' && gameBoard[1][2] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    } else if (gameBoard[2][0] == 'x' && gameBoard[2][1] == 'x' && gameBoard[2][2] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][0] == 'x' && gameBoard[1][0] == 'x' && gameBoard[2][0] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][1] == 'x' && gameBoard[1][1] == 'x' && gameBoard[2][1] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][2] == 'x' && gameBoard[1][2] == 'x' && gameBoard[2][2] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][0] == 'x' && gameBoard[1][1] == 'x' && gameBoard[2][2] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][2] == 'x' && gameBoard[1][1] == 'x' && gameBoard[2][0] == 'x') {
        document.getElementById('dynamic-text').textContent = `${playerOne.name} won`;
        gameEnd = true;
    }

    if (gameBoard[0][0] == 'circle' && gameBoard[0][1] == 'circle' && gameBoard[0][2] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    } else if (gameBoard[1][0] == 'circle' && gameBoard[1][1] == 'circle' && gameBoard[1][2] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    } else if (gameBoard[2][0] == 'circle' && gameBoard[2][1] == 'circle' && gameBoard[2][2] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][0] == 'circle' && gameBoard[1][0] == 'circle' && gameBoard[2][0] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][1] == 'circle' && gameBoard[1][1] == 'circle' && gameBoard[2][1] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][2] == 'circle' && gameBoard[1][2] == 'circle' && gameBoard[2][2] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][0] == 'circle' && gameBoard[1][1] == 'circle' && gameBoard[2][2] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    } else if (gameBoard[0][2] == 'circle' && gameBoard[1][1] == 'circle' && gameBoard[2][0] == 'circle') {
        document.getElementById('dynamic-text').textContent = `${playerTwo.name} won`;
        gameEnd = true;
    }

    let count = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] != '') {
                count++;
            }
        }
    }

    if (count == 9 && gameEnd != true) {
        document.getElementById('dynamic-text').textContent = 'It\'s a tie!';
        gameEnd = true;
    }

    if (gameEnd == true) {
        gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
        changeName.textContent = 'Restart game';
        changeName.setAttribute('id', 'restart-game');
    }
}