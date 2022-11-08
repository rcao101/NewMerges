// alert("Cool");
console.log("Hello");



// for (let i = 2; i < 11; i++) {
//     console.log(2 ** i);
// }

// let i = 1 
// while (i < 11) {
//     console.log(Math.pow(2, i));
// }

// let input = ""
// let numInput = ""
// do {
//     input = prompt( "what is your name");
    //prompt always returns a string
    //we need to convert the string to a number and check if it was successfully converte
    //nan when user enters a non numerical string
// }   while (!isNaN(Number(input)));
// console.log(input);


// alert("Welcome " + input)
// alert(`Welcome ${input}`);

// let fruits = ["Apple", "Banana"];

// fruits.push("Orange");
// console.log(fruits);

// //to beggining of array [0]
// fruits.unshift("Mango");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// //remove beggining of array [0]
// fruits.shift();
// console.log(fruits);

// // for (i = 0; i <fruits.length; i++){
// //     console.log(fruits[i]);
// // }


// for (let item of fruits){
//     console.log(item);
// }

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     gender: "male",
//     interests: ["music", "skiing"],
// }

// console.log(`My name is  ${person.name[0]} ${person.name[1]}`)
// console.log(`I am interest in ${person.interests [0]} and ${person.interests[1]}`)

// for (let prop in person){
//     console.log(`my ${prop} is ${person[prop]}`)
// }

//objectname.propertyname

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];

//for in = object
//for of = array

counter= 0 ;

for (let stud of students){
    if(stud.program === "CIT" && stud.GPA > 3)
    {
        counter++;
    }
}

console.log(counter)