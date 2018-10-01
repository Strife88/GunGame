
//playerConstructor Object
function PlayerCard(name, gun, team) {
    this.isSelected = false;
    this.ActionPoints = 12;
    this.playerName = name;
    this.status = 'alive';
    this.gun = gun;
    this.team = team;
}
PlayerCard.prototype.AP = function() {
    return this.ActionPoints;
};


//playerConstructorObjects
var playerBlue1 = new PlayerCard("Player1", "pistol", "Blue");
var playerBlue2 = new PlayerCard("Player2", "pistol", "Blue");
var playerBlue3 = new PlayerCard("Player3", "rifle", "Blue");
var playerBlue4 = new PlayerCard("Player4", "sniper", "Blue");

var blueArray = ['bug',playerBlue1,playerBlue2,playerBlue3,playerBlue4];


var playerRed1 = new PlayerCard("Player1", "pistol", "Red");
var playerRed2 = new PlayerCard("Player1", "pistol", "Red");
var playerRed3 = new PlayerCard("Player1", "rifle", "Red");
var playerRed4 = new PlayerCard("Player1", "sniper", "Red");

var redArray = ['bug',playerRed1,playerRed2,playerRed3,playerRed4];

//generate card from js objects

var createTag = function(tag,classname,parent,text) {
 var element = document.createElement(tag);
 if(classname) {
 element.classList.add(classname);
 }
 if(text){
 element.innerHTML = text;
 }
 var container = document.getElementsByClassName(parent);
 for(i=0;i< container.length;i++) {
 container[i].appendChild(element);
     }
};



for(i=1;i < 5 ;i++)
{    
createTag('div', 'playerCard', 'container');
createTag('div', 'Ava-Info', 'playerCard');
createTag('div', 'Avatar', 'Ava-Info');
createTag('div', 'Main-Info', 'Ava-Info');
createTag('div', 'ApGroup', 'Main-Info');
createTag('span', '', 'ApGroup','AP');
createTag('h1', '', 'ApGroup',blueArray[i].ActionPoints);
createTag('h3', 'playerName','Main-Info',blueArray[i].playerName);
    
createTag('div', 'param', 'playerCard');
createTag('div', 'gun-type', 'param'); 
createTag('span', '', 'gun-type','gun');
createTag('h3', 'gun-Name', 'gun-type',blueArray[i].gun);
    
createTag('div', 'status', 'param');
createTag('span', '', 'status','stats');
createTag('h3', 'status-Name', 'status',blueArray[i].status);  
}
//get list of player cards in a array
var playerCardArray =     document.getElementsByClassName("playerCard");

// set each player card ID
for(i=0;i<playerCardArray.length;i++) {
    playerCardArray[i].setAttribute("id", "PlayerCard"+(1+i));
    console.log(playerCardArray);
};

// add click on player card
var playerCard; 
for(i=1;i<5;i++) {
    playerCard = document.getElementById('playerCard'+i);
console.log(playerCard);

}




//gunConstructor Object
function Gun(actionPoints, hitChance, burstRound) {
    this.ActionPoints = actionPoints;
    this.hitChance = hitChance;
    this.burstRound = burstRound;
    this.burstHitChance = hitChance/burstRound + 10;
}

var rifle = new Gun("4", "40", 3);
var pistol = new Gun("3", "30", 3);
var sniper = new Gun("6", "60");

var MoveAction = {
    Run: 4,
    Hide: 4,
    Defend: 8
};




//Selected Player - Class Active
//Check his AP

// If AP > actionAPcost
// Do smthing A,B
// else add class = disabled

// A
// On click move/hide/defence
// decrease AP from selected player.

//B
// select target
//On click singe/burst
// check if target set
// If targetSet = false
// Then alert (set target)
// Else
// decreace AP from selected player
// calculate Hit to target

// If hit = true
// target status = dead;
//



/*
var pistol = {
 BurstRounds : 3,
 ApCost : {
 precise : 3,
 normal : 2,
 fast : 1,
},
 hitChance : {
 precise : 30,
 normal : 20,
 fast : 10,
},
 PreciseFire : fire(this.hitChance.precise),
 normalFire : fire(this.hitChance.normal),
 fastFire : fire(this.hitChance.fast)
 PreciseBurst : fire(this.hitChance.precise),
 normalBurst : fire(this.hitChance.normal),
 fastBurst : fire(this.hitChance.fast)
  }
}

var single = {
 FireRounds : 1,
 ApCost : {
 precise : 3,
 normal : 2,
 fast : 1,
},
 hitChance : {
 precise : 0.7,
 normal : 0.5,
 fast : 0.3,
},

}


var shots = 1;
var hitChance = 30;

var fire = function(hitChance) {
 if (Math.round(Math.random()*100)<= hitChance) {
   return "hit";
}
 else {
   return "miss";
 }
}


var burst = function(shots,hitChance) {
var hitArray = [];
for(i=0;i<shots;i++) {
  hitArray.push(fire(hitChance));
}

var hit = [];
var miss = [];
for(i=0;i<hitArray.length;i++){
	var current = hitArray[i]
	if(current == "miss"){
    miss.push(current);
       }
  else {
    hit.push(current);
  }
  }

return(hit.length);
}

burst(30,hitChance);
*/
