class User {
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`User Name is ${this.userName}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
        
    }
}

const chai = new Teacher("mazid","mazid@google.com","123456");

chai.addCourse();
chai.logMe();
