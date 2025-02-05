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



/**------------------Maths------------------ */
// `${} -> max`
console.log(Math);
console.log(`${Math.abs(-5)} -> abs`);
console.log(`${Math.abs(5)} ->abs`);
console.log(`${Math.round(5.4)} ->round`);
console.log(`${Math.round(5.6)} ->round`);
console.log(`${Math.ceil(7.4)} -> ceil`);
console.log(`${Math.floor(7.4)} -> floor`);
console.log(`${Math.min(4, 2, 3, 6, 8)} -> min`);
console.log(`${Math.max(4, 2, 3, 6, 8)} -> max`);

console.log(Math.round(Math.random()*10));

let ran = (Math.random() * 10) + 1;

console.log(`${ran} -> ${Math.floor(ran)}`);

const min = 10;
const max = 20;
let san = (Math.random() * 10);

console.log(Math.floor(san * (max - min + 1)));
console.log(Math.floor(san * (max - min + 1)) + min);
