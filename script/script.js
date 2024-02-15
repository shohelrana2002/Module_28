// random number statrt
function continueGame() {
  const texts = randomAlphabet();
  const currentText = document.getElementById("add");
  currentText.innerText = texts;
  sceBgColor(texts);
}

// click to open and hidden
function startClick() {
  // hide every thing
  hiddenClick("hidden");
  hiddenClick("score-update");
  removeClass("show");
  // reset score of life
  setText("life", 5);
  setText("score", 0);
  continueGame();
}

// game over
function gameOver() {
  const hide = hiddenClick("show");
  const remove = removeClass("score-update");
  // final score
  const lastScore = scoreAllUpdate("score");
  setText("game-over-update", lastScore);

  // clear last alphabet
  const text = getElementTextById("add");
  sceBgRemove(text);
}
//////////////////////////////////

// key press
function buttonClickPressUp(event) {
  const playerPress = event.key;
  // console.log("plyer press ", playerPress);
  // expected
  // game over click
  if (playerPress === "Escape") {
    gameOver();
  }
  const currentAlphabet = document.getElementById("add");
  const currentTarget = currentAlphabet.innerText;
  const expectedText = currentTarget.toLocaleLowerCase();
  // console.log(expectedText, playerPress);
  // check if else
  if (playerPress === expectedText) {
    const score = scoreAllUpdate("score");
    const scoreUpdate = score + 1;
    setText("score", scoreUpdate);
    // // score set update
    // const currentScore = document.getElementById("score");
    // const currentScoreText = currentScore.innerText;
    // const numberConvert = parseInt(currentScoreText);
    // const sum = numberConvert + 1;
    // // set score
    // currentScore.innerText = sum;
    // // start continue
    sceBgRemove(expectedText);
    continueGame();
  } else {
    const life = scoreAllUpdate("life");
    const lifeUpdate = life - 1;
    setText("life", lifeUpdate);
    // const changeLife = document.getElementById("life");
    // const changeText = changeLife.innerText;
    // const convertLife = parseInt(changeText);
    // const life = convertLife - 1;
    // // set text
    // changeLife.innerText = life;

    // game over
    if (lifeUpdate === 0) {
      gameOver();
      console.log("Game Over");
    }
  }
}
////
document.addEventListener("keyup", buttonClickPressUp);
