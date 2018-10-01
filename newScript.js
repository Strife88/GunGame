
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
var playerBlue1 = new PlayerCard("Tom", "pistol", "Blue");
var playerBlue2 = new PlayerCard("Bom", "pistol", "Blue");
var playerBlue3 = new PlayerCard("Jhon", "rifle", "Blue");
var playerBlue4 = new PlayerCard("Michele", "sniper", "Blue");

var blueArray = [playerBlue1,playerBlue2,playerBlue3,playerBlue4];


var playerRed1 = new PlayerCard("Ivan", "pistol", "Red");
var playerRed2 = new PlayerCard("Mihail", "pistol", "Red");
var playerRed3 = new PlayerCard("Victor", "rifle", "Red");
var playerRed4 = new PlayerCard("Igor", "sniper", "Red");

var redArray = [playerRed1,playerRed2,playerRed3,playerRed4];
var players = redArray.concat(blueArray)
//generate card from js objects

var createTag = function(tag,parent,classname1,classname2,text,parentNumber) {
 var element = document.createElement(tag);
 if(classname1) {
 element.classList.add(classname1);
 }
 if(classname2) {
 element.classList.add(classname2);  
 }
 if(text){
 element.innerHTML = text;
 }
 var container = document.getElementsByClassName(parent);
 if(parentNumber) {
     container[parentNumber].appendChild(element);   
 }
 else {
 container[0].appendChild(element);
 }
};

var createPlayerCard = function(Array,ParentElement) {
    for(var i=0;i<Array.length;i++) {
createTag('div',ParentElement,'player-Card');
createTag('div','player-Card','nameGroup','','',i);
createTag('div','nameGroup','avatar',"card-avatar","",i);
createTag('div','nameGroup','card-playerName',"","",i);
createTag('h4','card-playerName','','',Array[i].playerName,i);
createTag('div','card-playerName','card-actionPoints',"","",i);
createTag('h4','card-actionPoints','','',Array[i].ActionPoints,i);
createTag('div','player-Card','card-playerInfo',"","",i);
createTag('div','card-playerInfo','card-descGroup',"card-descGroup-gun","",i);
createTag('h5','card-descGroup-gun','','',"gun",i);
createTag('p','card-descGroup-gun','','',Array[i].gun,i);

createTag('div','card-playerInfo','card-descGroup',"card-descGroup-status","",i);
createTag('h5','card-descGroup-status','','',"status",i);
createTag('p','card-descGroup-status','','',Array[i].status,i);

}
}
//create player Cards in one table.
createPlayerCard(players,"blueTeam");
Cards = document.getElementsByClassName("player-Card");

//locate redPlayerColumn
var redColumn = document.getElementsByClassName("redTeam");

//move redplayers to that column
for(i=4;i<Cards.length;i++){
redColumn[0].insertBefore(Cards[4],null);
console.log(Cards[i])
console.log(redColumn[0])
}

//i have status is selected
//on click toggle class, and update status of object. 
for(i=0;i<Cards.length;i++){
    Cards[i].addEventListener("click",function(){

var current = document.getElementsByClassName("player-Card-selected");

  if (current[0] == null) {
    this.className += " player-Card-selected"; 
      }
  else {
  current[0].className = current[0].className.replace(" player-Card-selected", "");
  this.className += " player-Card-selected";
  }
    })
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

//+



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
