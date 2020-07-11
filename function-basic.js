// Don't give up
// 포기 하지마!!!

// 함수 선언
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum; // 함수 밖으로 결과 값을 내보냄
}

// 함수 호출
doSomething(add); // 함수 전달 할 때 인자 않넣고 함수만 전달

const addFun = add;
console.log(addFun);
addFun(1, 2);