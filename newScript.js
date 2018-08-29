

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
