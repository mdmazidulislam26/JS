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

