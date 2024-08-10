// 1. 콜백 함수
// 콜백 함수는 함수의 인자로 전달되어, 특정 시점에 호출되는 함수입니다.
function main(value) {
  // 전달된 함수(콜백 함수)를 호출합니다.
  value();
}

function sub() {
  // console.log("i am sub");
}

// main 함수에 콜백 함수를 인자로 전달합니다.
main(() => {
  // console.log("i am sub");
});

// 2. 콜백 함수의 활용
// 특정 동작을 반복하는 함수입니다.
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

// 값을 두 배로 출력하는 함수입니다.
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

// 값을 세 배로 출력하는 함수입니다.
function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}

// 반복 동작을 추상화하여, 콜백 함수를 통해 구체적인 동작을 전달할 수 있습니다.
function repeatV2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    // 전달된 콜백 함수를 호출하여 동작을 실행합니다.
    callback(idx);
  }
}

// 기본 값 출력
repeatV2(5, function (idx) {
  console.log(idx);
});

// 값을 두 배로 출력
repeatV2(5, (idx) => {
  console.log(idx * 2);
});

// 값을 세 배로 출력
repeatV2(5, (idx) => {
  console.log(idx * 3);
});
