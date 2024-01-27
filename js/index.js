const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors'); // Corrected the variable name
const paper = document.getElementById('paper');
const current_play = document.getElementById('choose')
let current

function play() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    switch (randomChoice) {
        case 1:
            current = 'rock';
            break;
        case 2:
            current = 'scissors'; // Corrected the value
            break;
        case 3:
            current = 'paper';
            break;
    }

    if (current === 'rock') {
        rock.style.backgroundColor = 'green';
        paper.style.backgroundColor = 'white';
        scissors.style.backgroundColor = 'white';
        current_play.innerHTML = current
        
    } else if (current === 'scissors') { // Corrected the value
        scissors.style.backgroundColor = 'green';
        rock.style.backgroundColor = 'white';
        paper.style.backgroundColor = 'white';
        current_play.innerHTML = current

    } else if (current === 'paper') {
        paper.style.backgroundColor = 'green';
        scissors.style.backgroundColor = 'white';
        rock.style.backgroundColor = 'white';
        current_play.innerHTML = current

    }

    console.log(current);
}


