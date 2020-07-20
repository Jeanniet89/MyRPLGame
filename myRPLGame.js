const prompt = require('readline-sync');

let players = ["Sonya", "Blade","Kano","Baraka","Jade"]; 
let weapons = ["Steel Fans","Spirit Dagger","Saber Teeth","Razor Cane","Triblade"];
let enemies = ["Kitana", "Smoke", "Nightwolf"]
let fatalities = ["Fire Kiss", "Energy Rings","Blade Decapitation","Blade Spark"];

let randomFatality = Math.floor(Math.random() * fatalities.length);
let moves = randomFatality;
let random = Math.floor(Math.random() * enemies.length);
let randomEnemy = enemies[random];

function startGame() {
console.log('Welcome to Fight!'); 
const letsPlay = prompt.keyInSelect(['Yes', 'No'],'DARE TO ENTER?' );
  if (letsPlay === 0) {
    console.log("A brave choice..");
    handleIntro();
  } else {
    console.log("Oh well.. Maybe next time.");
    process.exit();
  }
} 
// this will exit the game
function gameOver() {
console.log('HAHA..You Loose!');
const gameOver = prompt.keyInSelect(['Yes', 'No'], 'Would you like to try again?');
    if (gameOver === 0) {
      handleIntro();
    } else {
      console.log('Thanks for playing!');
      process.exit();
    }
  }
// Game intro
function handleIntro() {
console.log('In a world thats filled with hate, you must learn to defend yourself at all cost.');
console.log('Lets look at your options, and remember to choose WISELY!!');
const choice = prompt.keyInSelect(['Sonya', 'Blade', 'Kano', 'Baraka', 'Jade'], 'Which player will you choose?');
switch (choice) {
  case 0: {
    weapons[0];
    console.log('I have spent a lifetime hidden from view. It will be my pleasure to kick your .....');
    handleWeapons(weapons[0]);
    break;
  }
  case 1: {
    weapons[1];
    console.log("A good chief gives, he doesn't take");
    handleWeapons(weapons[1]);
    break;
  }
  case 2: {
    weapons[2];
    console.log('Humans. Less ugly when they burn.');
    handleWeapons(weapons[2]);
    break;
  }
  case 3: {
    weapons[3];
    console.log("Speak. You've earned the chance.");
    handleWeapons(weapons[3]);
    break;
  }
  case 4: {
    weapons[4];
    console.log('This will be easy.');
    handleWeapons(weapons[4]);
    break;
  }
  default:
    console.log();
    process.exit();
}
}
function handleWeapons(weapons) { 
console.log('Now,lets see what we can do');
const weaponsType = prompt.keyInSelect(['Yes','No'],'Want to see our weapon of choice?');
if (weaponsType === 0) {
  console.log(weapons);
  adventureBegins();
} else {
console.log('Moving on then');
 process.exit();
}
}
//where the adventure starts
function adventureBegins() {
  console.log("Your partner has been choosen, now its time to FIGHT!!!!");
  console.log(`And you get to fight ${randomEnemy}`)
  const choice = prompt.keyInSelect(['Fight','Hide'], 'What will you do?');
  if (choice === 0) {
    console.log('Great, lets defeat the bastard');
    adventureContinues();
  } else if (choice === 1) {
    console.log('Silly, Rabbit: you cant hide from us. We will always find you!!');
    gameOver();
  } else {
    process.exit();
  }
}
function adventureContinues() {
console.log('You only get this one try, so make it a good one as if your life depended on it, BECAUSE IT DOES!');
console.log('With that beeing said, choose your next move. Dont Forget that the harder you hit the more life points you get to reserve!');
// chooses the move to make
moves = prompt.keyInSelect(fatalities, 'Which move?');
if (moves === 0) {
  console.log('Ouch, looks like your out luck and lifes.');
  console.log('Better luck next time.');
  gameOver();
} else if (moves === 1) {
  console.log('That didnt Suck!');
  console.log('Yet, it wasnt enought to keep you alive through the second round.');
  gameOver();
} else {
  console.log('WOOO!!!! HOOOOOO!!!!! Made it by an inch of luck.');
  console.log('You kick ASS today, Go get your well deserve REWARD!!');
  console.log('See you on our next adventure.');
}
}
startGame();
