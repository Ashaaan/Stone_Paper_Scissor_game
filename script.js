let choices = document.querySelectorAll("#choice");
let yourScore = document.querySelector(".your-score");
let compScore = document.querySelector("#comp-score");
let result = document.querySelector(".msg-two");
let resCon = document.querySelector(".res-con");

let usePoints = 0;
let compPoints = 0;
let gencomp = () => {
  let options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
choices.forEach((val) => {
  val.addEventListener("click", () => {
    const userChoice = val.getAttribute("class");
    playGame(userChoice);
  });
});
let playGame = (userChoice) => {
  console.log("the user selects :", userChoice);
  let compChoice = gencomp();
  console.log("the comp selects :", compChoice);
  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWin(userChoice, userWin, compChoice);
  }
};
let showWin = (userChoice, userWin, compChoice) => {
  if (userWin) {
    usePoints++;
    yourScore.innerText = usePoints;
    result.innerHTML = `
    <div class="glow-con relative flex flex-col items-center justify-center p-10">
  
  <div class="absolute w-64 h-24 bg-linear-to-br from-[#00b09b] to-[#96c93d] 
              rounded-full blur-[80px] opacity-50 -z-10 animate-pulse">
  </div>

  <div class="res-con relative z-10 flex items-center justify-center w-48 h-12 
              rounded-xl bg-linear-to-br from-[#00b09b] to-[#96c93d] shadow-2xl p-4">
    <p class="msg text-white font-bold">Your score ${usePoints} beats comp points ${compPoints}</p>
  </div>
  
</div>`;
  } else {
    compPoints++;
    compScore.innerText = compPoints;
    result.innerHTML = ` 
    <div class="glow-con relative flex flex-col items-center justify-center p-10">
  
  <div class="absolute w-64 h-24 bg-linear-to-br from-[#bc4e9c] to-[#f80759] 
              rounded-full blur-[80px] opacity-50 -z-10 animate-pulse">
  </div>

  <div class="res-con relative z-10 flex items-center justify-center w-48 h-12 
              rounded-xl bg-linear-to-br from-[#bc4e9c] to-[#f80759] shadow-2xl p-4">
    <p class="msg text-white font-bold">Comp points ${compPoints} your points ${usePoints}</p>
  </div>
  
</div>`;
  }
};
let draw = () => {
  result.innerHTML = `
  <div class="glow-con relative flex flex-col items-center justify-center p-10">
  
  <div class="absolute w-64 h-24 bg-linear-to-br from-[#fc5c7d] to-[#6a82fb] 
              rounded-full blur-[80px] opacity-50 -z-10 animate-pulse">
  </div>

  <div class="res-con relative z-10 flex items-center justify-center w-48 h-12 
              rounded-xl bg-linear-to-br from-[#fc5c7d] to-[#6a82fb] shadow-2xl p-4">
    <p class="msg text-white font-bold">Draw!</p>
  </div>
  
</div>`;
};
