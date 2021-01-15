//myName stores the word michael, const keeps that variable from changing.
//nine equals the sum of 2 numbers to be 9
let myName = "Michael";
const States = 50;
let nine = 5 + 4;
let veggies = ['Lettuce', 'Onion', 'Celery'];
let pet = {
    Breed: "black cat",
    Name: "Samantha"
}
let sam = {
    Age: 21,
    Name: "sam"
}
let harry = {
    Age: 22,
    Name: "harry"
}
let kas = {
    Age: 20,
    Name: "kas"
}
let rudy = {
    Age: 19,
    Name: "rudy"
}
let garey = {
    Age: 99,
    Name: "garey"
}
let people = [garey, sam, kas, rudy, harry];


sayHello();
checkAge(21, "Charles");
checkAge(27, "Abby");
checkAge(18, "James");
checkAge(17, "John");
console.log(pet.Name + " is a " + pet.Breed);

for(i = 0; i < 3; i++){
    console.log(veggies[i]);
}

for(i = 0; i < 5; i++){
    var a = people[i].Age;
    var b = people[i].Name;
    checkAge(a, b);
}

function getLength()

function sayHello() {
    console.log("Hello World!");
}

function checkAge(age, name) {
    if (age < 21) {
        console.log("sorry " + name + ", you are not old enough to view this page!");
    }
    else {
        console.log("Welcome, " + name + "!");
    }
}


