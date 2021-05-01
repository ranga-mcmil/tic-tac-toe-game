const board = document.querySelector('.board');
const result = document.querySelector('.result');
const next_move = document.querySelector('.next-move');
const buttons = document.querySelectorAll('.btn');


player1 = [];
player2 = [];

let moveX = true;


board.addEventListener('click', e => {
    if(e.target.nodeName === 'BUTTON'){
        const id = e.target.getAttribute('data-id');
        console.log(e)
        if(moveX){
            player1[id] = 1;
            e.target.disabled = true;
            e.target.innerText = 'X';
            next_move.innerText = 'Next move \' O \'';

            playGame(player1, 'Player 1 wins');
            moveX = !moveX;

        } else {
            player2[id] = 1;
            e.target.disabled = true;
            e.target.innerText = 'O';
            next_move.innerText = 'Next move \' X \'';
            playGame(player2, 'Player 2 wins');
            moveX = !moveX;
        }
    }
})

// Check all horizontal lines if theres a match
const checkHorizon = (arr) => {
    for(let i = 0; i <= 6; i+=3 ){
        horizontals = (arr[i] && arr[i+1] && arr[i+2])
        if(horizontals){
            return true;
            break;
        }         
    }
}

// Check all vertical lines if theres a match
const checkVerticals = (arr) => {
    for(let i = 0; i < 3; i++ ){
        verticals = (arr[i] && arr[i+3] && arr[i+6])
        if(verticals){
            return true;
            break;
        }   
    }    
}

// Check both diagonal lines if theres a match
const checkDiagonals = (arr) => {
    diagonal1 = (arr[0] && arr[4] && arr[8]);
    diagonal2 = (arr[2] && arr[4] && arr[6]);
    if(diagonal2 || diagonal1){
        return true
    }
}

// disable all buttons after a win 
const disableBtns = () => {
    for(let i =0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }    
}

const playGame = (player, message) => {
    
    if(checkHorizon(player)){
        result.innerText = message;
        disableBtns()
    } else if(checkVerticals(player)){
        result.innerText = message;
        disableBtns()
    } else if(checkDiagonals(player)){
        result.innerText = message;
    } else {
        
    }


}