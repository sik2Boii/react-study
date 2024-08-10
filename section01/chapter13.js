// 1. 객체 생성
// 객체를 생성하는 두 가지 방법입니다.
let obj1 = new Object(); // 객체 생성자 사용
let obj2 = {}; // 객체 리터럴 사용 (더 일반적으로 사용)

// 2. 객체 프로퍼티(객체 속성)
// 객체는 키-값 쌍으로 구성된 속성들을 가집니다.
let person = {
  // Key: Value 형태로 속성을 정의합니다.
  name: "임준식", // 문자열 값
  age: 28, // 숫자 값
  hobby: "헬스", // 문자열 값
  extra: {}, // 빈 객체
  function: function () {}, // 함수도 속성으로 가질 수 있습니다.
  10: 11, // 숫자 키
  "like codding": true, // 공백이 포함된 키는 문자열로 묶어야 합니다.
};

// 3. 객체 프로퍼티를 다루는 방법

// 3-1. 특정 프로퍼티에 접근 (점 표기법)
// 객체의 속성에 접근할 때 점 표기법을 사용합니다.
let name = person.name;
console.log(name); // "임준식", 존재하지 않는 프로퍼티에 접근 시 undefined 반환

// 3-2. 특정 프로퍼티에 접근 (괄호 표기법)
// 객체의 속성에 접근할 때 괄호 표기법을 사용할 수도 있습니다.
let age = person["age"]; // "age" 속성에 접근
console.log(age); // 28

let property = "hobby";
let hobby = person[property]; // 변수에 저장된 속성 이름으로 접근
console.log(hobby); // "헬스"

// 3-3. 새로운 프로퍼티를 추가하는 방법
// 점 표기법과 괄호 표기법 모두 사용 가능합니다.
person.job = "be developer"; // 새로운 속성 추가
person["favoriteFood"] = "계란"; // 새로운 속성 추가

// 3-4. 프로퍼티를 수정하는 방법
// 기존 속성의 값을 수정할 수 있습니다.
person.job = "fe developer"; // "job" 속성의 값을 수정
person["favoriteFood"] = "닭가슴살"; // "favoriteFood" 속성의 값을 수정

// 3-5. 프로퍼티를 삭제하는 방법
// delete 키워드를 사용하여 객체의 속성을 삭제할 수 있습니다.
delete person.job; // "job" 속성 삭제
delete person["favoriteFood"]; // "favoriteFood" 속성 삭제

// 3-6. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
// 특정 속성이 객체에 존재하는지 확인할 수 있습니다.
let result1 = "name" in person; // "name" 속성이 person 객체에 있는지 확인
let result2 = "location" in person; // "location" 속성이 person 객체에 있는지 확인
console.log(result1); // true 출력 ("name" 속성이 존재함)
console.log(result2); // false 출력 ("location" 속성이 존재하지 않음)
