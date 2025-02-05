// array

const arr1 = [1,2,3];
const arr2 = new Array("hello","Hi");
const arr3 = new Array();

console.log(arr1);
console.log(arr2);
console.log(arr3);

// array method

arr3.push(1);
arr3.push(2);
arr3.push(3);
arr3.push(4);
arr3.push(5);
arr3.push("Hello");
console.log(arr3);
arr3.pop()
console.log(arr3);
arr3.unshift();
console.log(arr3);
arr3.shift();
console.log(arr3);

console.log(arr3.includes(0));
console.log(arr3.indexOf(2));

const strArr = arr3.join();

console.log(strArr);
console.log(typeof strArr);

// slice => Not modify the array
// splice => modify the array

console.log("A ", arr3);
console.log(arr3.slice(1,4));
console.log("B ", arr3);
console.log(arr3.splice(1,4));
console.log("C ", arr3);


