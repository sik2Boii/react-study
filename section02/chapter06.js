// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스를 사용한 순회
// 배열의 인덱스를 통해 각 요소에 접근할 수 있습니다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 결과: 1, 2, 3
}

// 1-2. for of 반복문
// 배열의 각 요소를 순서대로 불러와서 처리할 수 있습니다.
// 특정 인덱스에 접근하거나 수정하는 것은 불가능합니다.
for (let item of arr) {
  console.log(item); // 결과: 1, 2, 3
}

// 2. 객체 순회
let person = {
  name: "임준식",
  age: 28,
  hobby: "헬스",
};

// 2-1. Object.keys
// -> 객체에서 Key 값들만 뽑아서 새로운 배열로 반환합니다.
let keys = Object.keys(person);
console.log(keys); // 결과: ['name', 'age', 'hobby']

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]); // 결과: name, age, hobby
}

for (let key of keys) {
  console.log(key); // 결과: name, age, hobby
  console.log(key, person[key]); // 결과: name 임준식, age 28, hobby 헬스
}

// 2-2. Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환합니다.
let values = Object.values(person);

for (let value of values) {
  console.log(value); // 결과: 임준식, 28, 헬스
}

// 2-3. for in 반복문
// -> 객체의 모든 키(key)를 순회할 수 있습니다.
for (let key in person) {
  console.log(key); // 결과: name, age, hobby
  console.log(key, person[key]); // 결과: name 임준식, age 28, hobby 헬스
}

// 객체 순회는 for in, 배열 순회는 for of를 사용합니다.
