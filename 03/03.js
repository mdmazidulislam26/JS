//? THIS and arrow function in javascript

//! Normal function
function plusOne(num){
    return num+1;
}

//! Normal function
const plusTwo = function(num){
    return num+2;
}

//! Arrow function 
//? Explicit Return you have to use return key while using '{}'
const plusThree = (num) =>{ return num+3;}

//! Implicit Return No need to return kay
const plus01 = (num1,num2) => num1 + num2 
const plus02 = (num1,num2) => (num1 + num2) 
const obj01 = () => ({name : "Mazidul Islam"}) 

console.log(plusOne(1));
console.log(plusTwo(1));
console.log(plusThree(1));

console.log(plus01(5,6));
console.log(plus02(8,6));

console.log(obj01());
