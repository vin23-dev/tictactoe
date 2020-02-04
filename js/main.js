const winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const lookup = {
    '1': 'Red',
    '-1':'Blue',
    'null': 'white'
};

const squares = document.querySelectorAll('div');
const message = document.querySelector('h2');

document.querySelector('section').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', init);

function init(){
    board = [null, null, null, null, null, null, null, null, null];
    winner = null;
    turn = 1
    renderBoard();
}

init();

function handleMove(event){
    let index = parseInt(event.target.id.replace('sq', ''))
    if (board[index] || winner) return;
    board[index] = turn;
    turn *= -1;
    winner = checkForWinner();
    renderBoard();
}

function checkForWinner(){
    for (let i = 0; i < winners.length; i++){
        if (Math.abs(board[winners[i][0]] + board[winners[i][1]] + board[winners[i][2]]) === 3) return board[winners[i][0]];
    }
    if (board.includes(null)) return null;
    return 'Tie';
}

function renderBoard(){
    board.forEach(function(square, index){
        squares[index].style.background = lookup[square];
    });
    if (winner === 'Tie'){
        message.innerHTML = 'TIE GAME!';
    }else if (winner){
        message.innerHTML = `${lookup[winner].toUpperCase()} is the winner!`;
    }else{
        message.innerHTML = `NEW GAME! Make the first move...`;
    }
}