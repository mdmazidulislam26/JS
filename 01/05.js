/**------------------Number------------------ */
const reg = 12009326;
const regNo = new Number(12009326);

console.log(reg);
console.log(regNo);
console.log(`${typeof(reg)} - ${typeof(regNo)}`);

console.log(regNo.toLocaleString('en-IN'));


console.log(`${reg.toString()} - ${typeof(reg.toString())} - ${typeof(reg.toString().length)}`);

const price = 123.456;
console.log(price.toFixed(2));
// toPrecision() -> use only while you are confirm about length
console.log(`${price.toPrecision(5)} - ${price.toPrecision(4)} - ${price.toPrecision(3)} - ${price.toPrecision(2)} - ${price.toPrecision(1)}`);



