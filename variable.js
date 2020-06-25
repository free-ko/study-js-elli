// 1. Use strict

// Typescript 쓸때에는 밑에 안 써도 되는데 VanillaJS일 때는 쓰는게 좋음
// 왜냐하면 JavaScript is very flexible
// flexible === dangerous 
// added ECMAScript 5
'use strict';

// 예를 들어 선언 되지 않은 a에 값을 넣으면 브라우저에서는 아무 문제 없음 (use strict 없을 때)
a = 7;

// 그래서 변수를 선언 하고 그 변수에 값을 넣어야됨
let a;
a = 7;

// 결론 : use strict를 선언해서 코드 작성해야됨 
// 상식적인 범위 안에서 코드 작성을 할 수 있음
// JS 엔진이 효율적으로 더 빠르게 JS를 분석 할 수 있음 그래서 실행하는데 있어서 조금 더 나은 성능 개선까지 기대할 수 있음.

// 입력 연산 출력이 프로그래밍에서 가장 중요함

// 2. Variable
// let (added in ES6)

let globalName = 'global name'; // 어디서든 사용 가능
{
    let name = "freeko";
    console.log(name);
    name = 'ko';
    console.log(name);
} // 밖에서는 이 변수 사용 불가함

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting(move declaration from bottom to top) 어디에 선언했는지 상관없이 항상 선언을 위로 끌어 올려주는 거 그래서 밑에 변수 선언을 밑에 작성했음에도 위로 올려서 값을 할당시켜버림
// has no block scope 블록 안에 있는 변수는 밖에서 사용 할 수 없는데 var로 선언한 변수는 무시함
age = 4; // 변수를 선언도 안하고 값을 할당 할 수 없음!!
var age // 근데 var는 그냥 진행함...

// 3. Constant
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container