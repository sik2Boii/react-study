// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환하는 메서드
let arr1 = [
  { name: "임준식", hobby: "헬스" },
  { name: "유남곤", hobby: "축구" },
  { name: "임경엽", hobby: "축구" },
];

const soccerPeople = arr1.filter((item) => item.hobby === "축구");

console.log(soccerPeople); // 결과: [{name: '유남곤', hobby: '축구'}, {name: '임경엽', hobby: '축구'}]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각의 요소에 콜백 함수를 적용한 결과를 모아 새로운 배열로 변환하는 메서드
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item) => {
  return item * 2;
});

console.log(mapResult); // 결과: [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); // 결과: ['임준식', '유남곤', '임경엽']

// 3. sort
// 배열의 요소를 사전순으로 정렬하는 메서드입니다.
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // 결과: ['a', 'b', 'c']

// 기본적으로 sort는 요소를 문자열로 변환한 후, 유니코드 값에 따라 사전순으로 정렬합니다.
let arr4 = [10, 3, 5];
arr4.sort();

console.log(arr4); // 결과: [10, 3, 5], 숫자가 문자열로 변환되어 사전순으로 정렬되므로 예상과 다른 결과가 나올 수 있습니다.

// 숫자 배열을 올바르게 정렬하려면 비교 함수를 사용해야 합니다.
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

const arrAsc = arr4.sort(compare); // 비교 함수를 사용하여 숫자를 올바르게 정렬

console.log(arrAsc); // 결과: [3, 5, 10]

// 4. toSorted
// 기존 배열을 정렬하여 새로운 배열을 반환하는 메서드
let arr5 = ["b", "a", "c"];
const sorted = arr5.toSorted();

console.log(arr5); // 결과: ['b', 'a', 'c'] (원본 배열은 변경되지 않음)
console.log(sorted); // 결과: ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
// 기본적으로 쉼표(,)를 사용하여 요소들을 연결하지만, 다른 구분자를 사용하고 싶다면 인수로 전달할 수 있습니다.
let arr6 = ["lim", "jun", "sik"];
const joined = arr6.join();
console.log(joined); // 결과: lim,jun,sik

const joinedV2 = arr6.join("-");
console.log(joinedV2); // 결과: lim-jun-sik
