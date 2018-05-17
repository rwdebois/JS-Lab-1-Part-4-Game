var userHealth = 40;
var grantHealth = 10;
var playerWins = 0;
var playerHealCount = 2;
var wins = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {
 document.getElementById("game-wrapper").style.display = "block";
 document.getElementById("start-wrapper").style.display = "none";
 startGame();
}

var playerName = document.getElementById("playerName");
function setPlayerName(user) {
 playerName.innerText = user;
}

var attackButton = document.getElementById("attackButton");
attackButton.onclick = attack;
function attack() {
 userHealth -= getDamage(5);
 grantHealth -= getDamage(3);
 console.log(`The user has ${userHealth} health remaining`);
 console.log(`Grant has ${grantHealth} health remaining`);

 var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
 playerHeathProgressBar.value = userHealth;

 var enemyHealthProgressBar = document.getElementsByClassName("enemyHealth")[0];
 enemyHealthProgressBar.value = grantHealth;

 var playerWinsProgressBar = document.getElementsByClassName("playerWins")[0];
 playerWinsProgressBar.value = playerWins;

 if (grantHealth <= 0) {
   playerWins++;
   grantHealth = 10;
   var message = "user has 1 vistory"
   if (wins > 1) {
       var message = "user has 1 vistory"
        var playStatusMessage=document.getElementById("text");
        var statusUpdate=text.innerText(`${playerName}` + `${userHealth}`);
   }
      }
 
 if(userHealth <= 0){
 
 }}
var healButton = document.getElementById("healButton");
 healButton.onclick = heal;

 var playerHealCountProgressBar = document.getElementsByClassName("playerHealCount")[0];
 
 function heal() {
   if (playerHealCount > 0 ){
     userHealth += getRandom(10);
     playerHealCount--;
     playerHealCountProgressBar.value = playerHealCount;
   console.log(`the user has healed and has ${userHealth}`);
 }}


 if (playerWins === 5) {
   console.log(`The user has ${playerWins} wins`);
 }  

var quitButton = document.getElementById("quitButton");
quitButton.onclick = quit;

function quit(){
    alert('You Have Quit Game');
   document.getElementById("game-wrapper").style.display = "none";
   document.getElementById("start-wrapper").style.display ="block";
 console.log("You have quit the game.")
 alert('You Have Quit Game');
 return;
}

function startGame() {
 var user = prompt('Please enter your name');
 setPlayerName(user);
}

function getDamage() {
 return getRandom(5)
}
function getRandom(max) {
 return Math.floor(Math.random() * max) + 1;
}





// $('.available'.on('click', function(){
//     alert('hello')
// }
// .available {
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     text-align:center;
// }