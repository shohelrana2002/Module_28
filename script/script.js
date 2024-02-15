// random number statrt
function continueGame() {
  const texts = randomAlphabet();
  const currentText = document.getElementById("add");
  currentText.innerText = texts;
  sceBgColor(texts);
}

// click to open and hidden
function startClick() {
  const hide = hiddenClick("hidden");
  const remove = removeClass("show");
  continueGame();
}
