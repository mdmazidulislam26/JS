for (let i = 0; i < 5; i++) {
    console.log(i);   
}

console.log();

for (let i = 1; i <= 20; i++) {
    if (i%2 == 0) {
        continue;
    }else if (i == 7) {
        break;
    }
    console.log(i);
}

const arr = [ 1, 2, 3, 4, 5];

for (const element of arr) {
    console.log(element);
    
}

const greeting = "Hello"

for (const greet of greeting) {
    console.log(greet);
    
}

// Maps

const map = new Map();

map.set(1, "Robin");
map.set(2, "Rohin");
map.set(3, "Ramim");

console.log(map);

for (const value of map) {
    console.log(value);
}

for (const [key, value] of map) {
    console.log(value);
}


