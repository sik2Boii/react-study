// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 기존 방식으로 배열 요소에 접근
let one = arr[0];
let two = arr[1];
let three = arr[2];

// 구조 분해 할당을 사용하여 배열의 각 요소를 변수에 할당
let [oneV2, twoV2, threeV2, four, five = 5] = arr;

console.log(oneV2, twoV2, threeV2, four, five); // 1 2 3 undefined 5
// 배열에 없는 네 번째 요소는 undefined, 다섯 번째 요소는 기본값 5가 할당됩니다.

// 2. 객체의 구조 분해 할당
let person = {
  name: "임준식",
  age: 28,
  hobby: "헬스",
};

// 기존 방식으로 객체의 속성에 접근
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// 구조 분해 할당을 사용하여 객체의 속성을 변수에 할당
let { name, age: myAge, hobby, extra, city = "부산" } = person;
console.log(name, myAge, hobby, extra, city); // 임준식 28 헬스 undefined 부산
// extra는 정의되지 않았으므로 undefined, city는 기본값 "부산"이 할당됩니다.

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra, city }) => {
  // 매개변수로 받은 객체를 구조 분해 할당하여 각 속성을 변수로 사용
  console.log(name, age, hobby, extra, city);
};

func(person); // person 객체를 전달하여 함수 호출, 각 속성이 출력됩니다.
func(11); // 객체가 아닌 값을 전달하면 구조 분해 할당이 불가능해 오류가 발생할 수 있습니다.
