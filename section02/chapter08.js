// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드입니다.
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2); // 결과: 0 2, 1 4, 2 6
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2); // 각 요소를 두 배로 만들어 새로운 배열에 추가
});

console.log(doubleArr); // 결과: [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드입니다.
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(11);

console.log(isInclude); // 결과: false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드입니다.
// 해당 요소가 없을 경우 -1을 반환합니다.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

console.log(index); // 결과: 1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백 함수를 만족하는 첫 번째 요소의 인덱스를 반환하는 메서드입니다.
// 조건에 맞는 요소가 없을 경우 -1을 반환합니다.
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  return item % 2 !== 0; // 첫 번째 홀수 요소의 인덱스를 찾음
});

console.log(findedIndex); // 결과: 0

// indexOf는 배열에서 특정 값을 찾을 때 사용되며, 기본적으로 값의 참조를 비교합니다.
// 객체의 경우, 참조값이 다르면 동일한 내용이라도 다른 객체로 인식되어 -1을 반환합니다.
// findIndex는 콜백 함수를 통해 각 요소를 검사하므로, 객체의 특정 속성을 기준으로 인덱스를 찾을 수 있습니다.
let objectArr = [{ name: "임준식" }, { name: "엄준식" }];

console.log(objectArr.indexOf({ name: "임준식" })); // 결과: -1, 객체 비교는 참조값을 비교하므로 -1 반환
console.log(objectArr.findIndex((item) => item.name === "임준식")); // 결과: 0, 객체의 속성 값을 기준으로 인덱스 찾기

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 첫 번째 요소를 반환하는 메서드입니다.
// 조건에 맞는 요소가 없을 경우 undefined를 반환합니다.
let arr5 = [{ name: "임준식" }, { name: "엄준식" }];

const finded = arr5.find((item) => item.name === "임준식");

console.log(finded); // 결과: {name: '임준식'}, 객체 자체가 반환됩니다.
