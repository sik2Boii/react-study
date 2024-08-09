// 1. 함수 선언
// 함수를 선언하여 재사용 가능한 코드 블록을 정의합니다.
function hello() {
    console.log("Hello World");
}

console.log("함수 호출 시작");
// 함수를 호출하여 정의된 코드를 실행합니다.
hello();
console.log("함수 호출 끝");

// 호이스팅
// JavaScript는 다른 언어와 달리 호이스팅(hoisting)을 지원합니다.
// 호이스팅이란 변수 및 함수 선언이 해당 스코프의 최상위로 끌어올려지는 동작을 의미합니다.
// 이로 인해 함수 선언문은 선언하기 전에 호출할 수 있습니다.
let area1 = getArea(10, 20); // getArea 함수 호출
console.log(area1); // 계산된 면적 출력

// 사각형의 면적을 계산하는 함수
function getArea(width, height) {
    // 중첩 함수 선언
    function another() {
        console.log("중첩 함수");
    }

    // 중첩 함수 호출
    another();

    // 면적을 계산하고 반환합니다.
    let area = width * height;
    return area; // 반환값
}

// getArea 함수를 다시 호출하여 다른 면적을 계산합니다.
let area2 = getArea(30, 40);
console.log(area2); // 계산된 면적 출력