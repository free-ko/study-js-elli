// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtraction
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators
console.log(10 < 6) // less then 
console.log(10 <= 6) // less then or equal
console.log(10 > 6) // more then 
console.log(10 >= 6) // more then or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value (처음으로 true나오면 바로 멈춤 즉 뒤에 있는 것들 실행 안함)
// 그래서 밑에 처럼 가벼운 것부터 확인 할 수 있도록 앞에 두고 함수처럼 무거운 것을 뒤로 둠
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first falsy value(or과 마찬가지로 가벼운 것부터 앞에 두고 false나오면 실행 종료 뒤에 실행 시킬 필요 없음)
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement (and연산자는 null확인할 때에도 사용함)
// nullableObject && nullableObject.something
if (nullableObject != null) {
    nullableObject.something;
}

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😨');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타임은 다른데 내용은 같다 그러면 인정)
console.log(stringFive == numberFive); // True
console.log(stringFive != numberFive); // False

// === strict equality, no type conversion (타입도 다르면 다름, 왠만하면 이걸로 쓰삼)
console.log(stringFive === numberFive); // False
console.log(stringFive !== numberFive); // True

// object equality by reference
const ko1 = {
    name: 'ko'
};
const ko2 = {
    name: 'ko'
};
const ko3 = ko1;
console.log(ko1 == ko2); // 다른 reference(공간)에 있기 때문에 False
console.log(ko1 === ko2); // reference값이 달라서 False
console.log(ko1 === ko3); // 똑같은 reference를 가지고 있어서 True

// equality - puzzler
console.log(0 == false); // 0,undefined,null은 false로 간주 됨 그래서 True
console.log(0 === false); // 0은 boolean 타입이 아니여서 False
console.log('' == false); // True
console.log('' === false); // False
console.log(null == undefined); // True
console.log(null === undefined); // False 다른 타입이여서

// 8. Conditional operators: if
// if, else if, else
const name = 'ko';
if (name === 'ko') {
    console.log('Welcome, Ko!!');
} else if (name === 'coder') {
    console.log('You are amazing coder!!!');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ko' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('Go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all')
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed firs,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--
} while (i > 0);

// for loop, for(begin, condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i:${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (i = 0; i < 6; i++) {
    let j = 2 * i;
    console.log(`for:${j}`)
} // ME

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1.${i}`);
    }
} // 쌤



// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i === 8) {
        break
    } else {
        console.log(`for:${i}`);
    }

} // ME

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break
    }
    console.log(`q2. ${i}`);
} // 쌤