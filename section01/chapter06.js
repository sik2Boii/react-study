// 1. null 병합 연산자
// null 또는 undefined가 아닌 첫 번째 값을 반환합니다.
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20

// 둘 다 null이나 undefined가 아니라면 첫 번째 값을 반환합니다.
let var6 = var2 ?? var3; // 10
let var7 = var3 ?? var2; // 20

// userName이 null 또는 undefined이면 userNickName을 반환합니다.
let userName;
let userNickName = "식";

let displayName = userName ?? userNickName; // "식"

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 연산자입니다.

// JavaScript에서는 변수가 다양한 타입의 값을 가질 수 있습니다.
let var8 = 1;
var8 = "hello";
var8 = true;

// 변수의 현재 타입을 확인합니다.
let t1 = typeof var8; // "boolean"

// 3. 삼항 연산자
// 조건에 따라 다른 값을 반환하는 연산자입니다.
let var9 = 10;

// 변수 res에 var9의 값이 짝수라면 "짝", 홀수라면 "홀"을 할당합니다.
let res = var9 % 2 === 0 ? "짝" : "홀";