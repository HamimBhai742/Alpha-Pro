//Hide Element By Id

function hideElementById(elementId) {
    const hideElement = document.getElementById(elementId)
    hideElement.classList.add('hidden');
}


//Show Element by Id

function showElementByID(elementId) {
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden')
}


function setBackgroundColorById(elementId) {
    const backgroundColor = document.getElementById(elementId)
    backgroundColor.classList.add('bg-[#FFA500]')
}


function removeBackgroundColorById(elementId) {
    const backgroundColor = document.getElementById(elementId)
    backgroundColor.classList.remove('bg-[#FFA500]')
}

//Random Alphabet AlphaBet Generate

function randomAlphabetGenarate() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    const randomNumGenarate = Math.random() * 25;
    const indexNum = Math.round(randomNumGenarate)

    const alphabet = alphabets[indexNum];

    return alphabet
}

function scoreTableElementById(elementId) {
    const scoreTable = document.getElementById(elementId)
    const scorePoint = scoreTable.innerText;
    const score = parseInt(scorePoint)
    return score
}

function setScoreValue(elementId, value) {
    const setScore = document.getElementById(elementId)
    setScore.innerText = value;
}

function gameScore(elementId) {
    const scores = scoreTableElementById(elementId)
    const newScore = scores;
    return newScore
}

function getElementtextById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}

function gameOver() {
    hideElementById('paly-ground')
    showElementByID('score-point')


    const newScores = gameScore('score-table')
    const finalScore = setScoreValue('final-score-table', newScores)


    const currrentText = getElementtextById('current-text')
    removeBackgroundColorById(currrentText)
    // console.log(finalScore);
    // const finalScore=document.getElementById('final-score-table')
    // finalScore.innerText=newScores;
    // const finalScore = document.getElementById('final-score-table')
    // console.log(finalScore);
    // const finalScore=document.getElementById('final-score-table')
    // finalScore.innerText=newScores;
    // const finalScore = document.getElementById('final-score-table')
}

