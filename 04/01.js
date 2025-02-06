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

//? Single Condition

let mind = "NO"

if (mind == "OK") {
    console.log("Let's Play");  
} else {
    console.log("Not Now, Play Later!");
}


//? Multiple Condition
let physicallyStrong = false
let physicallyHealth = false

if (physicallyStrong && physicallyHealth) {
    console.log("Let's Play Football");
} else if(physicallyHealth == true && physicallyStrong == false) {
    console.log("Let's Play Video Game");
}else if(physicallyHealth == false && physicallyStrong == true){
    console.log("...!");
}else{
    console.log("Dhurr..");
}