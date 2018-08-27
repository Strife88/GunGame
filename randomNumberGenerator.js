var randomNumberGenerator = function () {
var array = [];
for (i=0;i<100;i++) {
array.push(Math.round(Math.random()));
}
var arrayOne = [];
var arrayZero = [];
for (i=0;i<100;i++) {
if (array[i] == 1) {
 arrayOne.push(array[i])
} else
arrayZero.push(array[i])
}
return arrayOne.length
}
