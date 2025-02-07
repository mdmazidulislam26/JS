//?Call and this in javascript

function setUserName(userName){
    this.userName = userName;
    console.log(`called`);
}

function createUser(userName,email,password){
    setUserName.call(this,userName);
    this.email = email;
    this.password = password;
}

const val = createUser("mazid","islam@cs.com","1234");
const val1 = new createUser("mazid","islam@cs.com","1234");
console.log(val);
console.log(val1);
