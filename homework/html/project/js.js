let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const oo = document.getElementById("o");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r")
    {
        oo.src = "images/rock.png";
        return "石";
    }
    if(letter === "p")
    {
        oo.src = "images/paper.png";
        return "布";
    }
    oo.src = "images/scissors.png";
    return "剪刀";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "玩家".fontsize(3).sub();
    const smallComputerWord = "電腦".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 贏 ${convertToWord(computerChoice)}${smallComputerWord}  你贏了!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "玩家".fontsize(3).sub();
    const smallComputerWord = "電腦".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 輸 ${convertToWord(computerChoice)}${smallComputerWord}  你輸了!`;
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "玩家".fontsize(3).sub();
    const smallComputerWord = "電腦".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} = ${convertToWord(computerChoice)}${smallComputerWord}  平手!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();
