const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors'); // Corrected the variable name
const paper = document.getElementById('paper');
const current_play = document.getElementById('choose')
const computer_play = document.getElementById('computer')
const current_score = document.getElementById('Score')
let score = 0
let current
let computer

function choise() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    switch (randomChoice) {
        case 1:
            current = 'rock';
            break;
        case 2:
            current = 'scissors'; 
            break;
        case 3:
            current = 'paper';
            break;
    }

    if (current === 'rock') {
        rock.style.backgroundColor = 'green';
        paper.style.backgroundColor = 'red';
        scissors.style.backgroundColor = 'red';
        current_play.innerHTML = `Yo choose: ${current}`

        
    } else if (current === 'scissors') { // Corrected the value
        scissors.style.backgroundColor = 'green';
        rock.style.backgroundColor = 'red';
        paper.style.backgroundColor = 'red';
        current_play.innerHTML = `Yo choose: ${current}`

    } else if (current === 'paper') {
        paper.style.backgroundColor = 'green';
        scissors.style.backgroundColor = 'red';
        rock.style.backgroundColor = 'red';
        current_play.innerHTML = `Yo choose: ${current}`

    }

    console.log(current);
}

function play() {
    let played = Math.floor(Math.random() * 3) + 1;

    switch (played) {
        case 1:
            computer = 'rock';
            break;
        case 2:
            computer = 'scissors';
            break;
        case 3:
            computer = 'paper';
            break;
    }

    computer_play.innerHTML = `Computer choose: ${computer}`;

    switch (current) {
        case 'rock':
            if (computer === 'scissors') {
                score += 1;
            } else if (computer === 'paper') {
                score -= 1;
            }
            break;
        case 'scissors':
            if (computer === 'rock') {
                score -= 1;
            } else if (computer === 'paper') {
                score += 1;
            }
            break;
        case 'paper':
            if (computer === 'rock') {
                score += 1;
            } else if (computer === 'scissors') {
                score -= 1;
            }
            break;
    }
    let current_score_text = `Current score: ${score}`;
    current_score.innerHTML = current_score_text;
}

