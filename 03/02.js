//? Scope level and mini hoisting in javascript

//! Global Scope
{
    //! Inner Scope
    {
        //! Inner Scope inside another scope
    }
}

//? hoisting

console.log(plasOne(5)); //? valid

function plasOne(num){
    return num + 1;
}
console.log(plasOne(5));//? valid

//console.log(plasTwo(5));//! Invalid
const plasTwo = function(num){
    return num + 2;
}
console.log(plasTwo(5));//? valid
