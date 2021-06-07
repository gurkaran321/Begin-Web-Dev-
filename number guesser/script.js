let guessNum = Math.floor(Math.random() * 100)

let submit = document.querySelector('button');
/*const checkGuess = () => {
    let name = prompt("Enter Your Name:");
    console.log(name);
}*/
submit.addEventListener('click', checkGuess);

function checkGuess() {
    let name = prompt("Enter Your Name:");
    let userNum = document.querySelector('input');
    console.log(name + " " + guessNum + " " + userNum.value);
    if (userNum === guessNum) {

        console.log('Correct Guess');
    } else {
        let result = document.querySelector('result');
        result.textContent = 'Wrong!';

        console.log('Wrong Guess');
    }
}