function hiddenClick(hide) {
  const hideFast = document.getElementById(hide);
  hideFast.classList.add("hidden");
}

function removeClass(remove) {
  const removeCl = document.getElementById(remove);
  removeCl.classList.remove("hidden");
}

// random alphabet

function randomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const arrayConvert = alphabets.split("");
  // random number
  const randomNumber = Math.random() * 25;
  const convertIndex = Math.round(randomNumber);
  const alphabetAr = arrayConvert[convertIndex];
  return alphabetAr;
}

// key bag  set

function sceBgColor(setBg) {
  const set = document.getElementById(setBg);
  set.classList.add("bg-amber-300");
}

function sceBgRemove(setRemove) {
  const set = document.getElementById(setRemove);
  set.classList.remove("bg-amber-300");
}

///// score update function all

function scoreAllUpdate(eventId) {
  const currentScore = document.getElementById(eventId);
  const number = currentScore.innerText;
  const numberConvert = parseInt(number);
  return numberConvert;
}

// set text

function setText(elementId, value) {
  const setTextS = document.getElementById(elementId);
  setTextS.innerText = value;
}

// current text

function getElementTextById(element) {
  const text = document.getElementById(element);
  const set = text.innerText;
  return set;
}
