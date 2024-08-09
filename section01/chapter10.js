// 1. 함수 표현식
// 함수 선언 방식으로 함수를 정의합니다.
function funcA() {
    console.log("funcA");
}

// 함수 표현식을 사용하여 변수를 통해 함수를 호출할 수 있습니다.
let varA = funcA;
varA(); // funcA 호출

// 익명 함수 표현식은 변수에 할당되기 전에 호출할 수 없습니다.
// varB(); // 오류 발생

// 익명 함수를 변수에 할당합니다.
let varB = function () {
    console.log("익명함수");
    console.log("익명함수는 호이스팅의 대상이 아닙니다.");
}

// 익명 함수 호출
varB(); // 익명함수 호출

// 2. 화살표 함수
// 화살표 함수를 사용하여 간결하게 함수를 정의할 수 있습니다.
let varC = (value) => {
    console.log(value);
    return value;
};

// 화살표 함수 호출
console.log(varC(11));