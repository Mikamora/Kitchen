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
//I could also initialize the objects in the array like ex. let people [{age:#, name:name}, etc.] ; if theres a chance of using it again I should make it seperate.
let people = [garey, sam, kas, rudy, harry];
let hwLength = getLength(sayHello());

//alerts
alert(sayHello());
checkAge(21, "Charles");
checkAge(27, "Abby");
checkAge(18, "James");
checkAge(17, "John");

console.log(pet.Name + " is a " + pet.Breed);

for(i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
}

for(i = 0; i < people.length; i++){
    var a = people[i].Age;
    var b = people[i].Name;
    checkAge(a, b);
}

if(hwLength % 2 == 0){
    console.log("The World is nice and even!!");
} else{
    console.log("The world is an odd place!");
}

function getLength(word){
    return word.length;
}

function sayHello() {
    return "Hello World!";
}

function checkAge(age, name) {
    if (age < 21) {
        alert("sorry " + name + ", you are not old enough to view this page!");
    }
    else {
    }
}


