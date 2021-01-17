// Elements from HTML
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const reset = document.querySelector('.btn__reset');
let missed = 0;

// Attach an event listener to the “Start Game” button.
reset.addEventListener("click", (startOverlay) => {
      const startOverlay = document.getElementById("btn__reset");
        startOverlay.style.display = ("none")
}

// The phrases array
let phrases = [
    "Javascript is challenging",
    "Learning to code is rewarding",
    "Netflix and chill",
    "Treehouse is great",
    "The sky is blue"
];

// getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
  var phrase = phrases[Math.floor(Math.random()*phrases.length)];
  return array[phrases];
}

getRandomPhraseAsArray(phrases);

//Game display
function addPhrasetoDisplay(arr){
  const phrasesList = phrase.childNodes[0].nextElementSibling;
  for (let i = 0; i < string.length; i++) {
      let listItem = document.createElement('li'),
          listContent = document.createTextNode([i]);
      if (string[i] !== ' ') {
          listItem.className = 'letter';
      listItem.appendChild(listContent);
      phrasesList.appendChild(listItem);
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);

// checkLetter function
function checkLetter(letter){
  let letters = document.querySelectorAll('.keyrow'),
  matchLetterCount = 0;
  letters.forEach(item => {
      let currentLetter = item.toLowerCase();
      if (currentLetter === letter) {
          item.className += "show";
          matchLetterCount += 1;
      }
  });
  if (matchLetterCount === 0) {
      letterFound = null;
      matchLetterCount = 0;
  } else if(matchLetterCount > 0) {
      letterFound = letter;
      matchLetterCount += 1;
  }
}

// Keyboard event listener
qwerty.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
      let letterFound = "disabled";
      tries = document.querySelectorAll('.tries');
}});

// Missed guesses counter
      let missed = 0;
      button = event.target.textContent.toLowerCase();
        event.target.className = 'chosen';
        event.target.disabled = true;
        checkLetter(button);
          if (letterFound === null) {
          missed += 1;
          }
          checkWin();
}

function checkWin(){
  const lettersReveal = document.querySelectorAll('show'),
  lettersInPhrase = document.querySelectorAll('.keyrow');
  let startOverlay = document.querySelector('#overlay'),
  overlayTitle = document.querySelector('.title');

  if(lettersReveal.length === lettersInPhrase.length) {
      startOverlay.style.display = '';
      startOverlay.className = 'win';
      overlayTitle.textContent = 'You Win!';
  } else if (missed === 5) {
      startOverlay.style.display = '';
      startOverlay.className = 'lose';
      overlayTitle.textContent = 'You Lose!';
  }
};