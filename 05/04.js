Object.prototype.hello = function(data){
    this.data = data;
    console.log(`hay ${data}`);
}

const all = {}
all.hello("Hello");

const arr = [1,2,3];

all.hello(arr)

const firstName = {
    nam : "Md"
}
const MidName = {
    nam : "Mazidul"
}
const lastName = {
    nam : "Islam"
}

firstName.__proto__ = MidName;//! Old
Object.getPrototypeOf(MidName,lastName);//? New

let author = "Md Mazidul Islam Rohin";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);   
}

"hello".trueLength();
