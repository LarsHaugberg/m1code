// Variabler
let faceExpression = document.getElementById("face-expression")
let playText = document.getElementById("play-text")
let feedText = document.getElementById("feed-text")
let sleepText = document.getElementById('sleep-text');
let playStatus;
let feedStatus;
let sleepStatus;
let totalStatus;
let averageMood;

// Intervaller
let playInterval;
let feedInterval;
let sleepInterval;

function randomNumber(min, max){
    return min + Math.floor(Math.random() * (max - min + 1));
}

function play(){
    if (playStatus < 100) {
        playStatus++;
        playText.innerHTML = `${playStatus}%`;
    } 
}

function feed() {
    if (feedStatus < 100) {
        feedStatus++;
        feedText.innerHTML = `${feedStatus}%`
    }
}

function sleep() {
    if (sleepStatus < 100) {
        sleepStatus++;
        sleepText.innerHTML = `${sleepStatus}%`;
    }
}

// Ikke dobbeltklikk reset knappen... (bug)
function reset() {
    playStatus = randomNumber(30, 80);
    sleepStatus = randomNumber(30, 80);
    feedStatus = randomNumber(30, 80);

    playInterval = setInterval(decreasePlay, 2000);
    feedInterval  = setInterval(decreaseFeed, 2000);
    sleepInterval = setInterval(decreaseSleep, 2000); 
}

function decreasePlay() {
    playStatus--

    if (playStatus < 1) {
        playStatus = 0
    }
    console.log(playStatus)
    playText.innerHTML = `${playStatus}%`;

    if (averageMood < 10) {
        clearInterval(playInterval)
    }
    setAverageMood();
}

function decreaseFeed() {
    feedStatus--

    if (feedStatus < 1) {
        feedStatus = 0
    }
    console.log(feedStatus)
    feedText.innerHTML = `${feedStatus}%`

    if (averageMood < 10) {
        clearInterval(feedInterval)
    }
    setAverageMood();
}

function decreaseSleep() {
    sleepStatus--

    if (sleepStatus < 1) {
        sleepStatus = 0
    }
    console.log(sleepStatus)
    sleepText.innerHTML = `${sleepStatus}%`;
    
    if (averageMood < 10) {
        clearInterval(sleepInterval)
    } 
    setAverageMood();   
}

function setAverageMood() {
    averageMood = (playStatus + feedStatus + sleepStatus) / 3;
    console.log("AVERAGE" + averageMood)
    setFacialExpression();
}

function setFacialExpression() {
    if (averageMood < 100) {
        faceExpression.innerHTML = "😀"

    } if (averageMood < 50) {
        faceExpression.innerHTML = "😐"

    } if (averageMood < 25) {
        faceExpression.innerHTML = "😭"

    } if (averageMood < 10) {
        faceExpression.innerHTML = "👻"
    }
}









