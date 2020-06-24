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