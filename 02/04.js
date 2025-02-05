// const user = new Object(); //? One way

const user = {};//? Another way

user.id = 12009326;
user.name = "Md Mazidul Islam";
user.isLoggedIn = true;

console.log(user);

const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        userName : {
            firstName : "Mazidul",
            lastName: "Islam"
        }
    }
} 

console.log(regularUser);
console.log();
console.log(regularUser.fullName.userName.firstName);
console.log(regularUser.fullName.userName.lastName);


const student1 = { 1 : "9326", 2 : "abc", 3 : "student"}
const teacher = {  4 : "1200", 5 : "xyx", 6 : "teacher"}

//! const obj3 = {student,teacher}; 

//! const obj3 = Object.assign({}, obj1, obj2);

const collage = { ...student1, ...teacher};

console.log(collage);
console.log(Object.keys(collage));
console.log(Object.values(collage));
console.log(Object.entries(collage));

