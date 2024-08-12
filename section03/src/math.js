// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 기본적으로 내보내는 함수 (default export)
export default function multiply(a, b) {
  return a * b;
}

// CommonJS (CJS) 방식
// module.exports를 사용하여 모듈을 내보냅니다.
// module.exports = {
//   add,
//   sub,
// };

// ES Module (ESM) 방식
// package.json 파일에 "type": "module" 설정이 필요합니다.
// ESM을 사용하면 CJS와 동시에 사용할 수 없습니다 (호환 불가).
// export { add, sub };
