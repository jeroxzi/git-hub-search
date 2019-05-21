/// GAME FUNCTION
// -- Player must guess anumber between a min and max
// -- Player gets a certain amount of guesses
// -- Notify player of guesses remain
// -- Notify the player of the correct answer if loose
// -- Let player choose to play again




//// Game Values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesleft = 3;


// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//// -- Play agaian event Listener
game.addEventListener('mousedown', function(e){
        if(e.target.className === 'play-again'){
            window.location.reload();
        }
})

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);


    /// Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between a ${min} and ${max}`, 'red');
    }

    if(guess === winningNum) {
            //// -- Game over - Won
            gameOver(true, `${winningNum} is correct, You win!`);

            //// -- Disable Input
                // guessInput.disabled = true;
                //// -- chane border color
                // guessInput.style.borderColor = 'green';

                //// --Set Message
        // setMessage(`${winningNum} is correct, you Win`, 'green');
    } else {
        //// -- Wrong Number
        guessesleft -= 1;

        if(guessesleft === 0) {
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        }else {
            //// -- Game Continues - answer Wrong
            guessInput.style.borderColor = 'red';

            //// -- Clear input
            guessInput.value = '';

            setMessage(`${guess} is not correct, ${guessesleft} guesses left`, 'red');
        }
    }

});



function gameOver(won, msg) {
let color;
//// -- ternary condition (short if statement)
won === true ? color = 'green' : color = 'red';

    //// -- Disable input
    guessInput.disabled = true;


    //// -- Change border color
    guessInput.style.borderColor = color;

    //// -- Set Text color
    message.style.color = color;

    //// -- set message
    setMessage(msg);

    //// -- Play again?
    guessBtn.value ='Play again';
    guessBtn.className += 'play-again';
}


function getRandomNum(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
}



// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}


