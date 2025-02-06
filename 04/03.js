
const myObject = {
    js : 'javascript',
    cpp : "C++",
    rb : "ruby",
    swift: "swift"
}


for (const key in myObject) {
    console.log(`${key} - ${myObject[key]}`);
}


const num01 = [1,2,3,4,5];

for (const key in num01) {
    console.log(num01[key]);
    
}

const coding = ["js","ruby","java", "python","cpp"];

coding.forEach(function(val){
    console.log(val);
})

coding.forEach((val) => {
    console.log(val);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);


coding.forEach((val,index,arr) => {
    console.log(`${val} - ${index} - ${arr}`);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "Python",
        languageFileName : "py",
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})


//? reduce
const arr001 = [1,2,3,4, 5];
let resu = arr001.reduce((a,b) => (a+b),0);
console.log(resu);
