// JavaScript는 다른 언어들과 다르게 스레드가 하나입니다.
// JavaScript 비동기 처리는 자바스크립트 엔진이 아닌 Web APIs를 활용해서 비동기 처리를 합니다.

// 결과: 1 -> 3 -> 2
// 1. 가장 먼저 호출 - 동기적 코드
console.log(1);

// 2. setTimeout() 함수 호출 - 동기적 코드
// setTimeout 자체는 동기적으로 호출되지만, 콜백 함수는 비동기적으로 실행됩니다.
setTimeout(() => {
  // 4. 3초 후에 호출 - 비동기적 코드
  console.log(2);
}, 3000);

// 3. 즉시 실행 - 동기적 코드
console.log(3);

// console.log(1)과 console.log(3)은 동기적으로 즉시 실행되고,
// setTimeout에 전달된 콜백 함수는 비동기로 처리되어 3초 후에 "2"가 출력됩니다.
