
let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let h1Score = document.querySelector("#p1Display");
let h2Score = document.querySelector("#p2Display");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
let resetButton = document.querySelector("#reset");
let numGames = document.querySelector("input");
let winningDisplay = document.querySelector("#score");




p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
        alert("PlayerOne Wins!")
        h1Score.classList.add("winner");
        gameOver = true;
    } 
    h1Score.textContent = p1Score;
    } 
})

p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        alert("PlayerTwo Wins!")
        h2Score.classList.add("winner");
        gameOver = true;
    } 
    h2Score.textContent = p2Score;
    }
})

resetButton.addEventListener("click", function(){
    h1Score.textContent = 0;
    h1Score.classList.remove("winner");
    h2Score.textContent = 0;
    h2Score.classList.remove("winner");
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
})

numGames.addEventListener("change", function(){
    winningDisplay.textContent = numGames.value;
    winningScore = parseInt(numGames.value);
   })
