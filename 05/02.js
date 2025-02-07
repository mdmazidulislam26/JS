//? Promise3

const promise003 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({name: "Md Mazidul Islam"})
    },200)
})

promise003.then((data) => {
    console.log(data);
});

const promise004 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const err = false;
    if (!err) {
        resolve({message : `promise return successfully!`});
    } else {
        reject(`Something is wrong!`);
    }
    },1000)   
})

promise004.then((user) => {
    console.log(user);
    return user.message;
}).then((message) => {
    console.log(message);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log(`promise return finally`)
);

/** 
    fetch('url')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
*/
