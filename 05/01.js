//? Promise

const promise001 = new Promise(function(resolve,reject){
    //? Do an async task
    //? Db calls, cryptography network
    setTimeout(function(){
        console.log(`Async task is complete!!`); //! execute second
        resolve()//! without 'resolve()' line 12 will not execute
    },1000)//! 2000ms = 2 second
})

promise001.then(function(){
    console.log(`Promise consumed!`);//! execute third
});

console.log(`Hello, I am out side the promise`); //! execute first

//?

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log(`Hello`);
        resolve()
    },2000)
}).then(() => {
    console.log(`Hi`); 
});