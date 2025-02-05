//? Object de-structure 
const student01 = {
    Id : 12009326,
    Name : "Md Mazidul Islam",
    Age : 24,
    Department : "Computer Science and Engineering",
    University : "Lovely Professional University"
}

//? Object de-structure
const {Id,Name,Age,Department,University} = student01;

console.log(`${Name} is Student of ${Department} in ${University}. His Id umber is : ${Id} and his ${Age} Years old!`);
