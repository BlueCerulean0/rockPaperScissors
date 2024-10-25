const modal = document.getElementById("myModal")
const ok = document.getElementById("ok")
let msg = document.getElementById("msg")
let pop = document.getElementById("pop")


let userInput = "";

document.getElementById("rock").onclick = function rock() {
    userInput = "rock"
    playGame()
};

document.getElementById("paper").onclick = function paper() {
    userInput = "paper"
    playGame()
};

document.getElementById("scissor").onclick = function scissor() {
    userInput = "scissor"
    playGame()
};

function playGame() {
    let options = ["rock", "paper", "scissor"]
    let compOutput = options[Math.floor(Math.random() * options.length)]

    if 
    (
        (userInput === "rock" && compOutput === "paper") || 
        (userInput === "scissor" && compOutput === "rock") || 
        (userInput === "paper" && compOutput === "scissor")
    ) {(msg.textContent = `Computer wins!`) && (lost())}

    else if (userInput === compOutput) {(msg.textContent = `It's a draw!`) && (draw())}

    else {(msg.textContent = `You win!`) && (won())}
    openModal()
};

function won() {
    pop.style.backgroundImage = "url('images/won.gif')"
}

function lost() {
    pop.style.backgroundImage = "url('images/lost.gif')"
}

function draw() {
    pop.style.backgroundImage = "url('images/draw.gif')"
}

function openModal() {
    modal.classList.add('show');
    modal.style.opacity = "1";
}

function closeModal() {
    modal.style.opacity = '0';
    
    modal.addEventListener('transitionend', () => {
        modal.classList.remove('show');
        modal.style.opacity = ''; 
    }, { once: true });
}

