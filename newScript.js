
//playerConstructor Object
function PlayerCard(name, gun, team) {
    this.isSelected = false;
    this.ActionPoints = 12,
    this.playerName = name,
    this.isAlive = true,
    this.gun = gun,
    this.team = team
}

//playerConstructorObjects
var playerBlue1 = new PlayerCard("Player1","pistol", "Blue");
var playerBlue2 = new PlayerCard("Player2","pistol", "Blue");
var playerBlue3 = new PlayerCard("Player3","rifle", "Blue");
var playerBlue4 = new PlayerCard("Player4","sniper", "Blue");

var playerRed1 = new PlayerCard("Player1","pistol", "Red");
var playerRed2 = new PlayerCard("Player1","pistol", "Red");
var playerRed3 = new PlayerCard("Player1","rifle", "Red");
var playerRed4 = new PlayerCard("Player1","sniper", "Red");


//gunConstructor Object
function Gun(actionPoints, hitChance, burstRound) {
    this.ActionPoints = actionPoints;
    this.hitChance = hitChance;
    this.burstRound = burstRound;
    this.burstHitChance = hitChance/burstRound + 10;
}

var rifle = new Gun("4", "40", 3);
var pistol = new Gun("3","30",3);
var sniper = new Gun("6","60");

var MoveAction = {
  Run: 4,
  Hide: 4,
  Defend: 8
}

//Selected Player - Class Active
//If 




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
