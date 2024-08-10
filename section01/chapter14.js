// 1. 상수 객체
// const 키워드를 사용하여 객체를 선언하면, 객체 자체는 수정할 수 없지만, 객체의 속성들은 수정, 추가, 삭제가 가능합니다.
const animal = {
  type: "고양이", // 초기 속성
  name: "멍멍이", // 초기 속성
  color: "black", // 초기 속성
};

animal.age = 1; // 속성 추가
animal.name = "야옹이"; // 속성 수정
delete animal.color; // 속성 삭제

// 2. 메서드
// 값이 함수인 객체의 프로퍼티를 메서드라고 합니다.

const person = {
  name: "임준식", // 초기 속성
  // 메서드 선언
  hello() {
    console.log("hello");
  },
};

// 메서드 호출
person.hello(); // 점 표기법을 사용하여 메서드 호출
person["hello"](); // 괄호 표기법을 사용하여 메서드 호출
