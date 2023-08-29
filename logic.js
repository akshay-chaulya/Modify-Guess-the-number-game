// all elements
const againBtn = document.getElementById("againBtn");
const textArea = document.getElementById("textarea");
const checkBtn = document.getElementById("checkBtn");
const text1 = document.querySelector(".t1");
const score = document.getElementById("score");
const highScore = document.getElementById("highScore");
const computerNumberBox = document.querySelector(".computerNumberBox")


// again logic 
againBtn.addEventListener("click", () => {
    againBtnLogic()
})

function againBtnLogic() {
    location.reload()
}

// rendom number logic && score
const rNum = Math.floor(Math.random() * 20);

// check logics
checkBtn.addEventListener("click", () => {
    checkBtnLogic()
})

function checkBtnLogic() {
    let inputValue = textArea.value;
    if (inputValue >= 0) {
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
            setHighScore(score.innerHTML)
        }
    }
    else {
        text1.innerHTML = "💀 Please Enter Valid Number!"
    }
    textArea.value = ""
    textArea.focus()
}

function setHighScore(score) {
    const storeScore = localStorage.getItem("highScore");
    if (score > storeScore) {
        localStorage.setItem("highScore", `${score}`)
    }
}

setInterval(() => {
    highScore.innerHTML = localStorage.getItem("highScore")
}, 50)

// store high score in local storeg