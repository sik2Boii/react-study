// 1. Falsy한 값
// JavaScript에서 거짓으로 평가되는 값들입니다.
let f1 = undefined; // 정의되지 않은 값
let f2 = null; // null 값
let f3 = 0; // 숫자 0
let f4 = -0; // 음수 0
let f5 = NaN; // 숫자가 아님 (Not-a-Number)
let f6 = ""; // 빈 문자열
let f7 = 0n; // BigInt 0

// 2. Truthy한 값
// -> 7가지 Falsy한 값들을 제외한 나머지 모든 값은 참으로 평가됩니다.
let t1 = "hello"; // 문자열
let t2 = 123; // 숫자
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {}; // 함수

// 3. 활용 사례
// Falsy한 값을 이용한 조건 처리

function printName(person) {
  // person이 undefined일 경우
  if (person === undefined) {
    console.log("undefined");
    return;
  }
  // ...
  // ...
  // person이 0n일 경우
  if (person === 0n) {
    console.log("0n");
    return;
  }
  // person이 Truthy한 값일 경우
  console.log(person.name);
}

function printNameV2(person) {
  // person이 Falsy한 값일 경우
  if (!person) {
    console.log("Falsy한 값");
    return;
  }
  // person이 Truthy한 값일 경우
  console.log(person.name);
}
