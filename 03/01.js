//? Function 
let result; 

function addTwoNumber (num1,num2){
    console.log(num1+num2);
}
result = addTwoNumber(3,2);
console.log(typeof(result));

function addThreeNumber (num1,num2,num3){
    return num1 + num2 + num3;
}
result = addThreeNumber(3,2,4);
console.log(result);
console.log(typeof(result));


function loginUserMessage(username){
    if (!username) {
        return "Please enter the user name";
    }
    return `${username} is loggedIn`;
}
console.log(loginUserMessage('abc'));//? valid
console.log(loginUserMessage());//! error


function logOutUserMessage(username = "xyz"){//? xyz is default value
    return `${username} is log out`
}
console.log(logOutUserMessage());

function calculatePrice (...price){
    return price;
}

console.log(calculatePrice(100,200,300));


const student01 = {
    Id : 12009326,
    Name : "Md Mazidul Islam",
    Age : 24,
    Department : "Computer Science and Engineering",
    University : "Lovely Professional University"
}

const {Id,Name,Age,Department,University} = student01;

console.log(`${Name} is Student of ${Department} in ${University}. His Id umber is : ${Id} and his ${Age} Years old!`);

function about (obj){
    console.log(`${obj.name} is Student of ${obj.Department} in ${obj.University}`);
}

about({
    name : "Ranak Debnath",
    Department : "Computer Science and Engineering",
    University : "Lovely Professional University"
})

