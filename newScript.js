
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

var createTag = function(tag,parent,classname1,classname2,text,parentNumber,idenifier) {
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
 if(idenifier){
 element.setAttribute("id",idenifier);
 }
 }
};

var createPlayerCard = function(Array,ParentElement) {
    for(var i=0;i<Array.length;i++) {
createTag('div',ParentElement,'player-Card',"","","","Player-"+(i));
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
}

//targetonDashboard
var createTargetOption = function(data) {
var targetList = document.getElementById("targetList")
var targetOption = document.createElement("option");
targetList.appendChild(targetOption);
targetOption.innerHTML = data;
}
//removeOptions
function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}

var createTargetList = function() {
if(currentSelection !== undefined){
      removeChildren(targetList);
if(currentSelection.team == "Blue") {
    for(i=0;i<redArray.length;i++){
      createTargetOption(redArray[i].playerName);
    }
}
else if(currentSelection.team == "Red") {
    for(i=0;i<blueArray.length;i++){
      createTargetOption(blueArray[i].playerName);
    } 
}
}
}


//i have status is selected
//on click toggle class, and update status of object.
//write a variable = selected object data
var currentSelection;
for(i=0;i<Cards.length;i++){  
    
     Cards[i].addEventListener("click",function(){
         
         var current = document.getElementsByClassName("player-Card-selected");
         var number = this.getAttribute("id").slice(-1);
         if (current[0] == null) {
             this.className += " player-Card-selected"; 
        players[number].isSelected = true;
             
      }
  else {
  current[0].className = current[0].className.replace(" player-Card-selected", "");
  this.className += " player-Card-selected";
    for(i=0;i< players.length; i++){
        players[i].isSelected = false;
    }  
    players[number].isSelected = true;
 
  }
     currentSelection = players.find(function(obj) { return obj.isSelected === true; })
     updateDashboard();
     createTargetList();     
    })
}

//createDinamicDashboard - or i just need to update innerHTML of the dashboard?
//function(tag,parent,classname1,classname2,text,parentNumber,idenifier)


var updateDashboard = function() {
if (currentSelection !== undefined){
document.getElementById("dashBoard-Name").innerHTML = currentSelection.playerName;
document.getElementById("dashBoard-Gun").innerHTML = currentSelection.gun;
document.getElementById("dashBoard-ActionPoints").innerHTML = currentSelection.ActionPoints;
    };
    }

//update the card Action points upon actions
var htmlCard =document.getElementsByClassName("player-Card-selected");
var updateCard = function() {
    htmlCard[0].getElementsByClassName("card-actionPoints")[0].getElementsByTagName("h4")[0].innerHTML = currentSelection.ActionPoints;
}

var actionButtons = document.getElementsByClassName("Btn-Sm");
//onClick actionButon reduce AP
for (i=0;i<actionButtons.length-2;i++) {
actionButtons[i].addEventListener("click",function(){
    if (currentSelection !== undefined) {
        if (currentSelection.ActionPoints >0) {
        currentSelection.ActionPoints -=4;
        console.log(currentSelection.ActionPoints);
        updateDashboard();
        updateCard();
            
            }
    }
    
})
}

//onClickEndTurn, restartActionPoints
document.getElementsByClassName("Btn-Big")[0].addEventListener("click",function() {
    for(i=0;i<players.length;i++) {
        players[i].ActionPoints =12;
        updateDashboard();  
        document.getElementsByClassName("card-actionPoints")[i].getElementsByTagName("h4")[0].innerHTML =players[i].ActionPoints;
    }
});


//gunConstructor Object
function Gun(actionPoints, hitChance, burstRound) {
    this.ActionPoints = actionPoints;
    this.hitChance = hitChance;
    this.burstRound = burstRound;
    this.burstHitChance = hitChance/burstRound + 10;
}

var rifle = new Gun("4", "10", 3);
var pistol = new Gun("3", "30", 1);
var sniper = new Gun("8", "70",1);

var MoveAction = {
    Run: 4,
    Hide: 4,
    Defend: 8
};


//sigleFireFunction
var fire = function(hitChance) {
 if (Math.round(Math.random()*100)<= hitChance) {
   return "hit";
}
 else {
   return "miss";
 }
}

//mainFireFunction
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

//onClick of FireKey
//1) get rifleKey from playerCard
//2) get rifleObject based on rifleKey
//2) set Burst hitchance from rifleObject 
//2) remove ActionPoints from rifleObject
//3) update UI

var hitStats = document.getElementsByClassName("hitStatus")[0].getElementsByTagName("h4")[0];

var fireButton = document.getElementById("FireBtn");

//onClick fireButon reduce APbasedOnRifleAP, outputHitChance
fireButton.addEventListener("click",function(){
    if (currentSelection !== undefined) {
        if (currentSelection.ActionPoints >0) {
        if ("rifle" == currentSelection.gun && currentSelection.ActionPoints >= rifle.ActionPoints) {
           currentSelection.ActionPoints -=rifle.ActionPoints; if(burst(rifle.burstRound,rifle.hitChance)>0){
        hitStats.innerHTML = "HIT";
            }
            else {
        hitStats.innerHTML = "MISS";
}
        }
         else if ("pistol" == currentSelection.gun && currentSelection.ActionPoints  >= pistol.ActionPoints) {
           currentSelection.ActionPoints -=pistol.ActionPoints;  if(burst(pistol.burstRound,rifle.hitChance)>0){
        hitStats.innerHTML = "HIT";
            }
            else {
        hitStats.innerHTML = "MISS";
}
        } 
        else if ("sniper" == currentSelection.gun && currentSelection.ActionPoints  >= sniper.ActionPoints) {
           currentSelection.ActionPoints -=sniper.ActionPoints; if(burst(sniper.burstRound,rifle.hitChance)>0){
        hitStats.innerHTML = "HIT";
            }
            else {
        hitStats.innerHTML = "MISS";
}
        }
        else {
        hitStats.innerHTML = "No AP";
}    
        updateDashboard();
        updateCard();
            
            }
        else {
        hitStats.innerHTML = "No AP";
}
    }
    
    
})



//Make list of targets -select with elements loop throu cards 0-3 4-7 based on what is currentSelectCard


//If HIT turn list object.AliveStatus = dead
//On FireClick, check if stats Dead - InnerHtml  to DEAD, change AVA to skull. All text to grey. 
// On END turn reset the style...
// Remove Target from List


//Selected Player - Class Active
//Check his AP

// If AP > actionAPcost
// Do smthing A,B
// else add class = disabled

// A
// On click move/hide/defence
// decrease AP from selected player. - DONE

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
