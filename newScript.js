

var burst = {
 "FireRounds" : 3,
 "ApCost" : {
 "precise" : 3,
 "normal" : 2,
 "fast" : 1,
},
 "hitChance" : {
  "precise" : 0.3,
  "normal" : 0.2,
  "fast" : 0.1,
 }
}

var single = {
 "FireRounds" : 1,
 "ApCost" : {
 "precise" : 3,
 "normal" : 2,
 "fast" : 1,
},
 "hitChance" : {
  "precise" : 0.7,
  "normal" : 0.5,
  "fast" : 0.3,
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