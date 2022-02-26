let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guess_left = 9;
let guesses = [];

function new_letter() {
    let random = Math.floor(Math.random() * letter.length);
    return letter[random];
}

let answer = new_letter();
console.log(answer);

document.addEventListener("keydown", my_func);

function my_func(event) {
    let guess = event.key.toLowerCase();
    if (!letter.includes(guess)) {
        return;
    }
    if (guesses.includes(guess)) {
        return;
    }
    guesses.push(guess);

    if (guess == answer) {
        wins++;
        guess_left = 9;
        guesses.length = 0;
        alert('You win.');
        answer = new_letter();
    } else if (guess_left == 1) {
        losses++;
        guess_left = 9;
        guesses.length = 0;
        alert('You lose! The correct letter is ' + answer);
        answer = new_letter();
    } else if (guess !== answer) {
        alert('Not ' + guess + ' ! Try again');
        guess_left--;
    }
    document.getElementById('wins').innerHTML = 'Wins: ' + wins;
    document.getElementById('losses').innerHTML = 'Losses: ' + losses;
    document.getElementById('guess').innerHTML = 'Guesses Left: ' + guess_left;
    document.getElementById('guesses').innerHTML = 'Your Guesses so far: ' + guesses.join(', ');

}