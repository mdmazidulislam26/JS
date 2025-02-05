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






