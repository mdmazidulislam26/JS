const user1 = {
    Id : "12009326",
    userName : "Md Mazidul Islam",
    age : 24,

    user01 :function () {
        console.log(`Name is ${this.userName}`); 
    }
}

// console.log(user1.user01());

function User(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // return this;
}

const u1 = new User("ab","cd");
console.log(u1);
console.log(new User("ef","gh"));


