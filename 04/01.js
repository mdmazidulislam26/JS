//? Control flow

if (true) {
    let start = "To"
    switch (start) {
        case "start": console.log("Tic");
            break;
        case "Tic": console.log("Tack");
            break;
        case "Tack": console.log("To");
            break;
        default: console.log("Tic -> Tack -> To");
            break;
    }
} else {
    console.log(`can't play!!`); 
}

