// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드입니다.
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1); // 결과: [1, 2, 3, 4, 5, 6, 7]
console.log(newLength); // 결과: 7 (새로운 배열 길이)

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 그 요소를 반환합니다.
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(arr2); // 결과: [1, 2]
console.log(poppedItem); // 결과: 3 (제거된 요소)

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 그 요소를 반환합니다.
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(arr3); // 결과: [2, 3]
console.log(shiftedItem); // 결과: 1 (제거된 요소)

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드입니다.
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4); // 결과: [0, 1, 2, 3]
console.log(newLength2); // 결과: 4 (새로운 배열 길이)

// shift와 unshift는 push와 pop에 비해 성능이 떨어질 수 있습니다.

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환합니다.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 시작 인덱스부터 마지막 인덱스 이전까지 자릅니다.
let slicedV2 = arr5.slice(2); // 시작 인덱스만 지정하면 그 인덱스부터 끝까지 자릅니다.
let slicedV3 = arr5.slice(-2); // 음수를 지정하면 배열의 끝에서부터 자릅니다.

console.log(sliced); // 결과: [3, 4, 5]
console.log(slicedV2); // 결과: [3, 4, 5]
console.log(slicedV3); // 결과: [4, 5]
console.log(arr5); // 결과: [1, 2, 3, 4, 5] (원본 배열은 변하지 않음)

// 6. concat
// 두 개 이상의 배열을 이어 붙여서 새로운 배열로 반환합니다.
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // 결과: [1, 2, 3, 4]
