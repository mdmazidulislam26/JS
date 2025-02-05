//? Singleton
//! Object.create

//? Object literals

const mySym = Symbol();

const student = {
    studentName : "Mazidul Islam",
    studentId : 12009326,
    "student Email" : "mazidul.12009326@lpu.in",
    [mySym] : "Spring Boot",
    "skill" : "Java",
    university : "Lovely Professional University" 
}

console.log(student.studentName);//? valid proses
console.log(student["university"]);//? valid proses
console.log(student.skill);//? valid proses
console.log(student[`student Email`]);//? valid proses
console.log((student[mySym]));//? valid proses
// console.log(student.student Email);//! -> Invalid Proses!!

student.studentName = "Md Mazidul Islam";
console.log(student.studentName);
Object.freeze(student);
student.studentName = "Rohin";
console.log(student.studentName);

student.greeting = function(){
    console.log(`Hello ${student.studentName}`);
}

console.log(student.greeting);
console.log(student);

