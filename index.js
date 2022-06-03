// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
}
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log('I was called!');
}

sayHello()
sayHelloToGuadalupe()
sayHelloToLiz()

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}`);
}

sayHelloTo("Guadalupe")
sayHelloTo("Jane")
sayHelloTo("R2-D2")
sayHelloTo(1)

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}`);
}

say("Hello", "Julio")
say("Julio", "hello") // reversed


// Return Values
function add(x, y) {
    return x + y;
}

console.log(add(1, 2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
}
console.log(say("Hello", "Liz"));


function add(x, y) {
    return x + y
}
console.log(add(1, 2));


// Simple Calculator
num1 = 5
num2 = 12

const sum = add(num1, num2)
const message = `The sum of your numbers is: ${sum}.`
console.log(message);

// Both Log and Return
function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}`
}
console.log(say("Howdy", "partner"));