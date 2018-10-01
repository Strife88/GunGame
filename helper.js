var h1 = 3.998;
var h2 = 2.827;
var h3 = 1.999;
var h4 = 1.414;
var p = 1;
var h5 = 0.707;
var h6 = 0.5;
var h7 = 0.354;

var baseType = 16;
var baseP = 1.5;
var baseH = 1.2;


console.log("font-size");
console.log("h1:"+Math.round(h1*baseType)+"px");
console.log("h2:"+Math.round(h2*baseType)+"px");
console.log("h3:"+Math.round(h3*baseType)+"px");
console.log("h4:"+Math.round(h4*baseType)+"px");
console.log("p:"+Math.round(p*baseType)+"px");
console.log("h5:"+Math.round(h5*baseType)+"px");
console.log("h7:"+Math.round(h7*baseType)+"px");

console.log("line-height");
console.log("h1:"+Math.round(h1*baseType*baseH)+"px");
console.log("h2:"+Math.round(h2*baseType*baseH)+"px");
console.log("h3:"+Math.round(h3*baseType*baseH)+"px");
console.log("h4:"+Math.round(h4*baseType*baseH)+"px");
console.log("p:"+Math.round(p*baseType*baseP)+"px");
console.log("h5:"+Math.round(h5*baseType*baseH)+"px");
console.log("h7:"+Math.round(h7*baseType*baseH)+"px");