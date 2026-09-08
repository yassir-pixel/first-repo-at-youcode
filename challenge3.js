let firstColor = "red";
let secondColor = "blue";

console.log("Before swapping:");
console.log(firstColor);
console.log(secondColor);
console.log("---------------");

let tmp;
tmp = firstColor;
firstColor = secondColor;
secondColor = tmp;
console.log("After swapping:");
console.log(firstColor);
console.log(secondColor);