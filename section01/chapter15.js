// 1. 배열 생성
let arrA = new Array(); // 배열 생성자 사용
let arrB = []; // 배열 리터럴 사용 (더 일반적으로 사용됨)

let arrC = [
  1, // 숫자 요소
  2, // 숫자 요소
  3, // 숫자 요소
  true, // 불리언 요소
  "hello", // 문자열 요소
  null, // null 요소
  undefined, // undefined 요소
  () => {}, // 함수 요소
  {}, // 객체 요소
  [], // 배열 요소
];

// 2. 배열 요소 접근
let item1 = arrC[0]; // 배열의 첫 번째 요소에 접근
let item2 = arrC[1]; // 배열의 두 번째 요소에 접근

arrC[0] = "hello"; // 배열의 첫 번째 요소를 "hello"로 수정
