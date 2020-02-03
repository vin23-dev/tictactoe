
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

const grid = () => Array.from(document.getElementsByClassName('square'));
const squareNumberId = (squareEl) => Number.parseInt(squareEl.id.replace('square', ''));
const emptySquares = () => grid().filter(squareEl => squareEl.innerText === '');
const allSame = (arr) => arr.every(squareEl => squareEl.innerText === arr[0].innerText && squareEl.innerText !== '')

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => squareNumberId(emptySquares()[Math.floor(Math.random() * emptySquares().length)]);
const oppositeTurn = () => {
    disableListeners();
    setTimeout(() => {
        takeTurn(opponentChoice(), 'o')
        enableListeners();
    }, 2000);
}

const clickFunction = ($event) => {
    takeTurn(squareNumberId($event.target), 'x');
    oppositeTurn();
}
const enableListeners = () => grid().forEach(squareEl => squareEl.addEventListener('click', clickFunction));
const disableListeners = () => grid().forEach(squareEl => squareEl.removeEventListener('click', clickFunction));
enableListeners();
