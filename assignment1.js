1.Examples Using Destructuring

Example 1:
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a, b, c);


Example 2:
const user = { name: "Raqeeb", age: 20 };
const { name, age } = user;
console.log(name, age);


Example 3:
const city = { place: "Bengaluru" };
const { place, pin = 560001 } = city;
console.log(place, pin);


Example 4:
const laptop = { brand: "Dell", price: 50000 };
const { brand: company, price: cost } = laptop;
console.log(company, cost);


Example 5:
const student = { name: "Zara" };
const { name: studentName, marks = 95 } = student;
console.log(studentName);
console.log(marks);


2. Examples: Converting Normal to Arrow Functions

Example 1:
function add(a, b) {
    return a + b;
}
const addArrow = (a, b) => a + b;


Example 2:
function greet() {
    return "Hello!";
}
const greetArrow = () => "Hello!";


Example 3:
function square(x) {
    return x * x;
}
const squareArrow = x => x * x;


Example 4:
function isEven(n) {
    return n % 2 === 0;
}
const isEvenArrow = n => n % 2 === 0;

Example 5:
function sayMessage(msg) {
    console.log(msg);
}
const sayMessageArrow = msg => console.log(msg);


