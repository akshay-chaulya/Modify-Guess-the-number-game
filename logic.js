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
    rNum = Math.floor(Math.random() * 20);
    computerNumberBox.textContent = "?";
    textArea.textContent = "";
    text1.textContent = "Start guessing...";
    score.textContent = "20";
    document.body.style.background = "rgba(0, 0, 0, 0.868)"
    textArea.disabled = false
    textArea.focus()
}

// rendom number logic && score
let rNum = Math.floor(Math.random() * 20);

// assingent variable
let highScore = 0;


// check logics
checkBtn.addEventListener("click", () => {
    checkBtnLogic()
})

function checkBtnLogic() {
    let inputValue = textArea.value;
    if (inputValue >= 0 && inputValue != "") {
        score.innerHTML -= 1;
        if (inputValue > rNum) {
            text1.innerHTML = "📈 To Big"
        }
        else if (inputValue < rNum) {
            text1.innerHTML = "📉 To Small"
        }
        else {
            text1.innerHTML = "🔥 Match"
            computerNumberBox.innerHTML = rNum
            document.body.style.background = "rgba(0, 176, 0, 0.678)"
            textArea.disabled = true
            if (score.textContent > highScore) {
                highScore = score.textContent;
                highScoreElem.textContent = highScore
            }
        }
    }
    else {
        text1.innerHTML = "💀 Please Enter Valid Number!"
    }
    textArea.value = ""
    textArea.focus()
}

