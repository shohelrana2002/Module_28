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

//////////////////////////////////

// key press
function buttonClickPressUp(event) {
  const playerPress = event.key;
  // console.log("plyer press ", playerPress);
  // expected
  const currentAlphabet = document.getElementById("add");
  const currentTarget = currentAlphabet.innerText;
  const expectedText = currentTarget.toLocaleLowerCase();
  // console.log(expectedText, playerPress);
  // check if else
  if (playerPress === expectedText) {
    sceBgRemove(expectedText);
    continueGame();
  } else {
  }
}
document.addEventListener("keyup", buttonClickPressUp);
