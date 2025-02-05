let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

arr1.push(arr2);  // modify the first array

let arr3 = arr1.concat(arr2) // do not modify any array. just return new array

let arr4 = [...arr1, ...arr2]; // concat array 
console.log(arr4);


let arr01 = [10, 20, [30, 40], 50, [60, 70,[80],90],100];

let modifyArr01 = arr01.flat(Infinity)

console.log(modifyArr01);


console.log(Array.isArray("Mazidul"));
console.log(Array.from("Mazidul"));
console.log(Array.from({name : "Mazidul" })); // it can't convert this string to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

