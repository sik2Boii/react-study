// 1. 대입 연산자
// 변수에 값을 할당합니다.
let var1 = 1;

// 2. 산술 연산자
// 기본적인 산술 연산을 수행합니다.
let num1 = 2 + 1; // 덧셈
let num2 = 2 - 1; // 뺄셈
let num3 = 2 * 1; // 곱셈
let num4 = 2 / 1; // 나눗셈
let num5 = 2 % 1; // 나머지

// 괄호를 사용하여 연산의 우선순위를 조정합니다.
let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
// 대입과 연산을 함께 수행합니다.
let num7 = 10;
num7 += 20; // num7 = num7 + 20;
num7 -= 20; // num7 = num7 - 20;
num7 *= 20; // num7 = num7 * 20;
num7 /= 20; // num7 = num7 / 20;
num7 %= 20; // num7 = num7 % 20;

// 4. 증감 연산자
// 변수의 값을 1만큼 증가 또는 감소시킵니다.
let num8 = 10;
num8++; // 후위 증가
num8--; // 후위 감소
++num8; // 전위 증가
--num8; // 전위 감소

// 5. 논리 연산자
// 논리 연산을 수행합니다.
let or = true || false; // 논리합 (OR)

let and = true && false; // 논리곱 (AND)

let not = !true; // 부정 (NOT)

// 6. 비교 연산자
// 값을 비교하여 불리언 값을 반환합니다.
let comp1 = 1 === 2; // 엄격한 동등 비교 (타입까지 비교)
let comp2 = 1 !== 2; // 엄격한 부등 비교

let comp3 = 2 > 1; // 크다
let comp4 = 2 < 1; // 작다

let comp5 = 2 >= 2; // 크거나 같다
let comp6 = 2 <= 2; // 작거나 같다