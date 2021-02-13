// Elements from HTML
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('phrase');
const btn__reset = document.querySelector('.btn__reset');
const loseMessage = document.querySelector('.lose-message');
let missed = 0;

// The phrases array
const phrases = [
  "Javascript is challenging",
  "Learning to code is rewarding",
  "Netflix and chill",
  "Treehouse is great",
  "The sky is blue"
];

// Attach an event listener to the “Start Game” button.
btn__reset.addEventListener("click", () => {
  const startOverlay = document.getElementById("overlay");
    startOverlay.style.display = "none";
});

// getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
  let randomPhrase = Math.floor(Math.random() * phrases.length);
  return arr[randomPhrase];
};

//Game display
function addPhrasetoDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    let ul = document.querySelector('ul');
      ul.appendChild(li);
      if( arr[i] != ' ' ){
        li.classList.add('letter');
      }
      else {
        li.classList.add('space');
      }
  }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray.toLowerCase());

// checkLetter function
function checkLetter(btn) {
  let list = document.querySelectorAll('.letter');
  let match = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i].textContent.toLowerCase() === btn) {
      list[i].classList.add('show');
      match = list[i].textContent;
    } 
  }
  return match;
}

// Keyboard event listener
qwerty.addEventListener('click', (event) => {
  let keyboard = qwerty.getElementsByClassName('.keyrow');
  let button = qwerty.getElementsByTagName('button');
    if ( event.target.tagName === 'BUTTON' && button.classList != 'chosen' ) {
      event.target.classList.add('chosen');
      event.target.disabled = true;
    const letterFound = checkLetter(event.target.textContent);
      if (letterFound == null) {
        let ol = document.querySelectorAll('#scoreboard ol li img');
        ol[missed].src = "images/lostHeart.png";
        missed += 1;
      }
  }
  checkWin();
});

//checkWin function
function checkWin() {
  let letter = document.querySelectorAll(".letter");
  let show = document.querySelectorAll(".show"); 
  const startOverlay = document.getElementById('overlay');
  if ( show.length == letter.length ) {
    startOverlay.style.display = 'block';
    startOverlay.classList.add("win")
  }
  if ( missed >= 5 ) {
    startOverlay.style.display = 'block';
    startOverlay.classList.add('lose');
    btn__reset.style.display = 'none';
    loseMessage.style.display = 'block';
  }
};
