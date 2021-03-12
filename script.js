//Selectors
const turnsDiv = document.querySelector('.turns');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.cell');

//Constants
const xSymbol = '×';
const oSymbol = '○';

//Variables
let gameOn = true;
let xTurn = true;
let winner = null;

//Functions
const symbol = (letter) => letter === 'x' ? xSymbol:oSymbol

const HandleWinner = (letter) => {
    gameOn = false;
    winner = letter;
    if(winner === 'x'){
        turnsDiv.innerHTML = `<span>${symbol(winner)} Won!</span>`
        }
    else{
        turnsDiv.innerHTML = `${symbol(winner)} Won!`
    }

};
const gameStatus = () => {
    const c1 = cellDivs[0].classList[2]
    const c2 = cellDivs[1].classList[2]
    const c3 = cellDivs[2].classList[2]
    const c4 = cellDivs[3].classList[2]
    const c5 = cellDivs[4].classList[2]
    const c6 = cellDivs[5].classList[2]
    const c7 = cellDivs[6].classList[2]
    const c8 = cellDivs[7].classList[2]
    const c9 = cellDivs[8].classList[2]
//Check Winner
if(c1 && c1===c2 && c1===c3){
    HandleWinner(c1);
    cellDivs[0].classList.add('won')
    cellDivs[1].classList.add('won')
    cellDivs[2].classList.add('won')
}
else if(c4 && c4===c5 && c4===c6){
    HandleWinner(c4);
    cellDivs[3].classList.add('won')
    cellDivs[4].classList.add('won')
    cellDivs[5].classList.add('won')
}
else if(c7 && c7===c8 && c7===c9){
    HandleWinner(c7);
    cellDivs[6].classList.add('won')
    cellDivs[7].classList.add('won')
    cellDivs[8].classList.add('won')
}
else if(c1 && c1===c4 && c1===c7){
    HandleWinner(c1);
    cellDivs[0].classList.add('won')
    cellDivs[3].classList.add('won')
    cellDivs[6].classList.add('won')
}
else if(c2 && c2===c5 && c2===c8){
    HandleWinner(c2);
    cellDivs[1].classList.add('won')
    cellDivs[4].classList.add('won')
    cellDivs[7].classList.add('won')
}
else if(c3 && c3===c6 && c3===c9){
    HandleWinner(c3);
    cellDivs[2].classList.add('won')
    cellDivs[5].classList.add('won')
    cellDivs[8].classList.add('won')
}
else if(c1 && c1===c5 && c1===c9){
    HandleWinner(c1);
    cellDivs[0].classList.add('won')
    cellDivs[4].classList.add('won')
    cellDivs[8].classList.add('won')
}
else if(c3 && c3===c5 && c3===c7){
    HandleWinner(c3);
    cellDivs[2].classList.add('won')
    cellDivs[4].classList.add('won')
    cellDivs[6].classList.add('won')
}
else if(c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9){
    turnsDiv.innerHTML = `<span>Its a Tie !</span>`
}
else{
    xTurn = !xTurn
    if(xTurn){
        turnsDiv.innerHTML = 'x Turn'
    }
    else{
        turnsDiv.innerHTML = '○ Turn'
    }
}

};

//Event Handeler
const handleReset = () => {
    xTurn = true
    turnsDiv.innerHTML = 'x Turn'
    for(const div of cellDivs){
        div.classList.remove('x')
        div.classList.remove('o')
        div.classList.remove('won')
    }
    winner = null;
    gameOn = true;
};

const handleCell = (e) => {
    const classList = e.target.classList

    if(!gameOn || classList[2] === 'x' || classList[2] === 'o'){
        return
    }

    if(xTurn){
        classList.add('x')
        gameStatus();
    }
    else{
        classList.add('o')
        gameStatus();
    }
};

//Event Listerners
resetDiv.addEventListener('click', handleReset)

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCell)
}