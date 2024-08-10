// 1. 단락 평가
// 단락 평가는 논리 연산에서 불필요한 연산을 생략하는 최적화 기법입니다.

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// && 연산자는 첫 번째 피연산자가 false일 경우, 두 번째 피연산자를 평가하지 않습니다.
console.log(returnFalse() && returnTrue()); // "False 함수" 출력, 최종 결과: false

// 첫 번째 함수가 true를 반환하면, 두 번째 함수도 평가됩니다.
console.log(returnTrue() && returnFalse()); // "True 함수", "False 함수" 출력, 최종 결과: false

// 2. 단락 평가 활용 사례
function printName(person) {
  // 단락 평가를 이용하여 person이 Falsy한 값일 경우 실행되지 않도록 합니다.
  // if문을 사용한 예시:
  // if (!person) {
  //   console.log("Falsy");
  //   return;
  // }
  // console.log(person.name);

  // 단락 평가를 사용하여 person이 존재할 때만 person.name을 출력합니다.
  // console.log(person && person.name);

  // 단락 평가와 논리 연산자를 사용하여 person이 없을 때 기본값을 설정합니다.
  const name = person && person.name;
  console.log(name || "Falsy"); // person이 없으면 "Falsy" 출력, 있으면 이름 출력
}

// 함수를 호출할 때, person이 undefined인 경우
printName(); // Falsy 출력

// 함수를 호출할 때, person 객체에 name 속성이 존재하는 경우
printName({ name: "임준식" }); // "임준식" 출력
