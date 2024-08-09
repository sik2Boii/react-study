// 1. 묵시적 형변환
// 자바스크립트 엔진이 자동으로 형 변환을 수행합니다.
let num = 10;
let str = "20";

// 숫자와 문자열을 더할 때, 숫자가 문자열로 변환됩니다.
const result = num + str; // "1020"

// 2. 명시적 형변환
// 프로그래머가 내장 함수를 사용하여 직접 형 변환을 수행합니다.

// 문자열을 숫자로 변환합니다.
let str1 = "10";
let strToNum1 = Number(str1); // 10

// 변환이 불가능한 문자열은 NaN이 됩니다.
let str2 = "10개";
let strToNum2 = Number(str2); // NaN

// parseInt는 문자열에서 숫자 부분만 변환합니다.
let strToNum3 = parseInt(str2); // 10

// 숫자를 문자열로 변환합니다.
let num1 = 20;
let numToStr1 = String(num1); // "20"