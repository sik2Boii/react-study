// CommonJS (CJS) 방식
// -> require() 함수를 사용하여 모듈을 가져옵니다.
// const { add, sub } = require("./math");

// ES Module (ESM) 방식
// -> import 키워드를 사용하여 모듈을 가져옵니다.
// -> ESM 사용 시 파일 확장자를 명시해야 합니다.
// import mul from "./math.js"; // 기본으로 내보낸 함수 가져오기
// import { add, sub } from "./math.js"; // 명시적으로 내보낸 함수 가져오기
import mul, { add, sub } from "./math.js";

console.log(add(1, 2)); // 결과: 3
console.log(sub(1, 2)); // 결과: -1
console.log(mul(2, 3)); // 결과: 6
