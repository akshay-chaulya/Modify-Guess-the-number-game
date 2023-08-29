// all elements here
const pageTitle = document.title
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const textBox = document.getElementById("textBox")
const input = document.getElementById("input");
const check = document.querySelector(".check");
const cancel = document.querySelector(".cancel");
const gameInstruction = document.querySelector(".gameInstruction")
const gameContainer = document.querySelector(".gameContainer")

// assignment prodess
let text = `Welcom To ${pageTitle} Game`;
let score = 0;

// random number
const rNum = Math.floor(Math.random() * 100)

// for reset main height when nav height change.
const resetmainHeight = function () {
    const navHeight = nav.offsetHeight;
    main.style.height = `calc(100vh - ${navHeight}px)`
}
resetmainHeight()

// div nav text typing animation effect
function textTypingAnimation(text, elem, speed) {
    let i = 0;
    function typeText() {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeText, speed)
    }
    if (elem.innerText === "") {
        typeText()
    }
}
textTypingAnimation(text, textBox, 50)

// cancel logic
cancel.addEventListener("click", () => {
    cancelLogic()
});
function cancelLogic() {
    input.value = "";
    gameInstructionHeightRemove('15vh')
    input.focus()
}

// for check logic
check.addEventListener("click", () => {
    checkLogic()
})

function checkLogic() {
    const inputValue = Number(input.value);
    const SPEED = 30;
    if (inputValue) {
        score++;
        if (inputValue > rNum) {
            text = `Not Matchh! Your Number ${inputValue} Is Biger Then The Computer Number.`
        }
        else if (inputValue < rNum) {
            text = `Not Match! Your Number ${inputValue} Is Smaller Then The Computer Number.`
        }
        else {
            text = `Your Number ${inputValue} Is Match The Computer Number. And Your Score Is *${score}*`
            gameInstruction.style.color = "#00008b"
        }


        if (gameInstruction !== "") {
            gameInstruction.innerHTML = '';
            textTypingAnimation(text, gameInstruction, SPEED)
        }
        gameInstructionHeightSet('15vh', text, gameInstruction, SPEED)
    }
    else {
        text = "Pleas enter a number!";
        if (gameInstruction !== "") {
            gameInstruction.innerHTML = '';
            textTypingAnimation(text, gameInstruction, SPEED)
        }
        gameInstructionHeightSet('15vh', text, gameInstruction, SPEED)
    }
    input.value = ""
    input.focus()
}

// gameInstruction height set logic

function gameInstructionHeightSet(x, text, elem, speed) {
    gameInstruction.style.display = "flex";
    setTimeout(() => {
        gameInstruction.style.height = x
        gameContainer.style.margin = 0
    }, 0)
    setTimeout(() => {
        textTypingAnimation(text, elem, speed)
    }, 300)
}

function gameInstructionHeightRemove(x = null) {
    gameInstruction.style.height = 0
    gameContainer.style.marginTop = x
    setTimeout(() => {
        gameInstruction.innerHTML = "";
    }, 700)
    setTimeout(() => {
        gameInstruction.style.display = "none";
    }, 1000)
}
