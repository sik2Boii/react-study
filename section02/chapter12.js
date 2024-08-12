// 1. 콜백 함수
function task() {
  setTimeout(() => {
    console.log("안녕하세요!"); // 3초 후에 실행됩니다.
  }, 3000);
}

task(); // 결과: 3초 뒤 "안녕하세요!" 출력

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum); // 3초 후에 a와 b의 합을 출력합니다.
  }, 3000);
}

add(1, 2); // 결과: 3

// 작동 순서
// 1. addV2() 호출
// 2. setTimeout이 3초 후 콜백 함수 실행
// 3. a와 b의 합을 계산하여 sum에 저장
// 4. callback(sum) 호출
// 5. 전달된 sum을 콜백 함수 내부에서 출력
function addV2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

addV2(1, 2, (value) => {
  console.log(value);
}); // 결과: 3 (3초 후에 출력됩니다)

// 음식을 식히는  상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "피자";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1000);
}

orderFood((food) => {
  console.log(food); // 3초 후에 "피자" 출력

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); // 2초 후에 "식은 피자" 출력

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood); // 1초 후에 "냉동된 식은 피자" 출력
    });
  });
});
