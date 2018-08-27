
//dataArray
var precise =0;
var normal = 1;
var fast = 2;

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
 }
}

//input value - fireType , TargetType

var ApCalculator = function(fireType,targetType) {
  var ApCost = Object.values(fireType.ApCost);
  return ApCost[targetType];
};
var HitCalculator = function(fireType,targetType) {
  var hitCost = Object.values(fireType.hitChance);
  return hitCost[targetType];
};
var ApCost = "";
var hitChance = "";

var input = function(fireType,targetType) {
  ApCost = ApCalculator(fireType,targetType);
  hitChance = HitCalculator(fireType,targetType);

};

input(burst,precise);
console.log(ApCost)
console.log(hitChance)

var deathCalculator = function(fireType.FireRounds,hitChance)
return fireType.FireRounds*
}
//return Result - kill or not kill
