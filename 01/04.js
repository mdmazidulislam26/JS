let name = "Md Mazidul Islam";
let profession = "Software Engineer";

console.log(`Hay My name is ${name} and I am a ${profession}. `);

const nam = new String("Mazidul Islam Rohin");

// console.log(nam[0]);
// console.log(nam.charAt(8));
// console.log(nam.indexOf('a'));

console.log(`last name : ${nam.substring(14)}`);

console.log(`middle name : ${nam.slice(8,13)}`)

let str = "           Rohin         ";

console.log(str);
console.log(str.trim());

let email = "abef@gmail.com"
email = email.replace('ef','cd')

console.log(email);
console.log(email.includes('cd'));
console.log(email.includes('ef'));

let strName = "Md-Mazidul-Islam";

console.log(strName.split('-'));

console.log(strName.toUpperCase());
console.log(strName.toLowerCase());



