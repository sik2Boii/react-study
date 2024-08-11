// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // 배열 요소를 개별적으로 추가
let arr2V2 = [4, ...arr1, 5, 6]; // Spread 연산자를 사용하여 배열 요소를 간편하게 추가

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  a: obj1.a,
  b: obj1.b,
  c: 3,
  d: 4,
};
let obj2V2 = {
  ...obj1, // Spread 연산자를 사용하여 객체의 속성을 간편하게 복사
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // Spread 연산자를 사용하여 배열을 함수의 인자로 전달

// 2. Rest 매개변수
// -> Rest: 나머지, 나머지 매개변수를 의미
// -> Rest 매개변수는 함수에서 전달받은 나머지 인자들을 배열로 묶어줍니다.
function funcB(...rest) {
  console.log(rest); // 전달받은 모든 인자가 배열 형태로 출력
}

function funcBV2(first, second, ...rest) {
  // Rest 매개변수는 항상 마지막에 위치해야 합니다.
  console.log(rest); // 첫 번째와 두 번째 인자를 제외한 나머지 인자가 배열로 출력
}

funcB(...arr1); // Spread 연산자를 사용하여 배열을 펼쳐 함수에 전달
