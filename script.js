let popup = document.getElementById("popup");
function openPopup() {
  console.log("hello");
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

let rulesBtn = document.getElementById("rules-btn");
rulesBtn.onclick = openPopup;

let removeBtn = document.getElementById("remove-btn");
removeBtn.onclick = closePopup;

const yourscoreEl=document.getElementById('your_score');
const computerscoreEl=document.getElementById('computer_score');
//update score
let  yourscore = 0;
let computerscore = 0;
//function to update score
function updateyourscore(value) {
  yourscore += value;
  yourscoreEl.innerText = yourscore;  
}
function updatecomputerscore(value) {
  computerscore += value;
  computerscoreEl.innerText = computerscore;
}

const buttons = document.querySelectorAll(".pick");
const main = document.getElementById("main");
const frame2 = document.getElementById("frame2");
buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    userChoice = buttons.getAttribute("data-choice");
    checkWinner();
  });
});
let userChoice = undefined;

const choice = ["paper", "rock", "scissors"];
function RandomChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}
//go back to main part when play again button was hit
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  //hide frame2 part | show main part
  main.style.display = "flex";
  frame2.style.display = "none";
});

// to check winner
function checkWinner() {
  // const yourchoice= choice();
  const computerChoice = RandomChoice();
  //update the view
  updateselection(user_selection,userChoice);
  updateselection(computer_selection,computerChoice);

  console.log(computerChoice);
  if (userChoice === computerChoice) {
    //tie
    winner_text.innerText = "TIE UP";
    h3.innerText='none';
    reset.innerText='REPLAY';
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    //you won
    updateyourscore(1);
    winner_text.innerText = " YOU WIN";
    reset.innerText='PLAY AGAIN';
  } else {
    //you lost
    updatecomputerscore(1);
    winner_text.innerText = " YOU LOST";
    reset.innerText='PLAY AGAIN';
  }
  //hide main part | show frame2 part
  main.style.display = "none";
  frame2.style.display = "flex";
}

const user_selection = document.getElementById("user_selection");
const computer_selection = document.getElementById("computer_selection");
const selection= document.getElementById('frame2')

function updateselection(selectionEl,choice){
  //  class reset

  selectionEl.classList.remove('paper');
  selectionEl.classList.remove('rock');
  selectionEl.classList.remove('scissors');
  //  update image inside the button
  
  const img=selectionEl.querySelector('img');
  selectionEl.classList.add(`${choice}`);
  img.src=`images/${choice}.png`;
  img.alt=choice;
}
