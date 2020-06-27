// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function == one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint =. createCard, createPoint
// function is object in Js 그래서 함수를 변수에 넣을 수도 있고 리턴 할 수도 있음

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log("Hello");

// 2. Parameters
// Primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder'
}
const ko = {
    name: 'ko'
};
changeName(ko);
console.log(ko);

// 3. Default parameters  (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6) 인자를 배열로 받음
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); // 위의 3개 다 결과는 같음
}
printAll('dream', 'coding', 'ko');

// 5. Local scope 밖에서는 안이 보이지 않고 안에서는 밖이 보임
let globalMessage = 'global' // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage); // global variable

    function printAnother() {
        console.log(message); // 위에서 선언해서 사용 가능
        let childMessage = 'hello';
    }
    console.log(childMessage); // 에러뜸
}
printMessage();
console.log(message); // 이거 에러뜸 {}안에서 지정한 변수여서

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) 선언하기도 전에 사용 가능
// a function expression is created when the execution reaches it.

const print = function () {
    // anonymous function
    console.log('print');
};
print(); // 변수임에도 불구하고 함수 호출 하는 것처럼 인자를 넣어서 쓸 수 있음
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(2, 3));

// 2. Callback function using function expression 변수 안에 넣은 함수를 다른 함수의 인자로 사용한다는 의미에서 함수를 불러온다라느 뜻
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes');
}

// named function
// better debugging in debugger's stack traces
// recursions 자기 함수안에 자기를 불러서 계속 실행하도록 함
const printNo = function print() {
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simpePinrt!');
};

const simplePrint = () => console.log('simplePrint');
const add = (a, d) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE : Immediately Invoked Function Expression 함수 만들고 바로 함수 실행
(function hello() {
    console.log("IIFE");
})();

// Fun quiz time💚
// function calculation(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculation(command, a, b) {
    console.log(`result: ${command(a,b)}`);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a % b;