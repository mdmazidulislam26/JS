//? Promise

const promise001 = new Promise(function(resolve,reject){
    //? Do an async task
    //? Db calls, cryptography network
    setTimeout(function(){
        console.log(`Async task is complete!!`); //! execute second
        resolve()//! without 'resolve()' line 12 will not execute
    },2000)//! 2000ms = 2 second
})

promise001.then(function(){
    console.log(`Promise consumed!`);//! execute third
});

console.log(`Hello`); //! execute first

//? 