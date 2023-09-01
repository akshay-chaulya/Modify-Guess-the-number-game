// all elements
const againBtn = document.getElementById("againBtn");
const textArea = document.getElementById("textarea");
const checkBtn = document.getElementById("checkBtn");
const text1 = document.querySelector(".t1");
const score = document.getElementById("score");
const highScoreElem = document.getElementById("highScore");
const computerNumberBox = document.querySelector(".computerNumberBox")


// again logic 
againBtn.addEventListener("click", () => {
    againBtnLogic()
})

function againBtnLogic() {
    computerNumber()
    computerNumberBox.textContent = "?";
    textArea.textContent = "";
    displayMessage('Start guessing...')
    score.textContent = "20";
    backgroundAndTextArea(false, "rgba(0, 0, 0, 0.868)")
    textArea.focus()
}

// display message in text1 function 
function displayMessage(message) {
    text1.textContent = message;
}

// background color set and text box logic
function backgroundAndTextArea(Tf, color) {
    textArea.disabled = Tf;
    document.body.style.background = color;
}


// assingent variable
let highScore = 0;
let rNum;

// rendom number logic && score
function computerNumber() {
    rNum = Math.floor(Math.random() * 20);
    return rNum;
}
computerNumber()

// check logics
checkBtn.addEventListener("click", () => {
    checkBtnLogic()
})

function checkBtnLogic() {
    let inputValue = (textArea.value);
    if (inputValue !== "") {
        inputValue = Number(inputValue)
        if (inputValue >= 0) {
            score.innerHTML -= 1;

            if (inputValue === rNum) {
                displayMessage('🎉 Correct Number!')
                computerNumberBox.innerHTML = rNum
                backgroundAndTextArea(true, "rgba(0, 176, 0, 0.678)")
                if (score.textContent > highScore) {
                    highScore = score.textContent;
                    highScoreElem.textContent = highScore
                }
            }
            else {
                displayMessage(inputValue > rNum ? '📈 To Big' : '📉 To Small')
            }
        }
        else {
            displayMessage('💀 Please Enter Valid Number!')
        }
    }
    else {
        displayMessage('🚫 No number!')
    }
    textArea.value = ""
    textArea.focus()
}

