// function palyBtn(){
//     const homeScreen=document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')

//     const palyGround=document.getElementById('paly-ground')
//     palyGround.classList.remove('hidden')
// }
document.addEventListener('keyup', keyCheak)


function palyBtn() {
    hideElementById('home-screen')
    hideElementById('score-point')
    showElementByID('paly-ground')
    continueGame()

    setScoreValue('score-table', 0)
    setScoreValue('life-table', 5)
}



function continueGame() {
    const alphabet = randomAlphabetGenarate()
    const currrentText = document.getElementById('current-text')
    currrentText.innerText = alphabet;

    setBackgroundColorById(alphabet)
}


function keyCheak(event) {
    const pressedKey = event.key;
    // console.log('player Prassed:',pressedKey);

    const currrentKeyScreen = document.getElementById('current-text')
    const screenShowKey = currrentKeyScreen.innerText.toLowerCase();
    console.log(pressedKey, screenShowKey);
    if (pressedKey === 'Escape') {
        // hideElementById('paly-ground')
        // showElementByID('score-point')

        // const newScores = gameScore('score-table')
        // const finalScore = setScoreValue('final-score-table', newScores)

        // const currrentText = getElementtextById('current-text')
        // removeBackgroundColorById(currrentText)

        gameOver()
    }

    if (screenShowKey === pressedKey) {
        // console.log('You win Got a Point');
        removeBackgroundColorById(pressedKey)
        continueGame()
        const scores = scoreTableElementById('score-table')
        const newScore = scores + 1;
        setScoreValue('score-table', newScore)


        // const scoreTable = document.getElementById('score-table')
        // const scorePoint = scoreTable.innerText
        // const score = parseInt(scorePoint)
        // const newScore = score + 1;
        // scoreTable.innerText = newScore;
        // return newScore
    }
    else {
        // console.log("You failed And Lost a Life");
        // hideElementById('paly-ground')
        // showElementByID('score-point')
        // const lifeTable = document.getElementById('life-table')
        // const lifeScore = lifeTable.innerText
        // const life = parseInt(lifeScore)
        const life = scoreTableElementById('life-table')
        const newLife = life - 1
        setScoreValue('life-table', newLife)

        // const newLife = life - 1

        // lifeTable.innerText = newLife
        if (newLife < 1) {
            gameOver()
            // const scoreTable = document.getElementById('score-table')
            // const scorePoint = scoreTable.innerText
            // const finalScoreTable=document.getElementById('final-score-table');
            // const finalScore=finalScoreTable.innerText;
            // const final=parseInt(finalScore)

            // final.innerText=scorePoint
        }
    }
}