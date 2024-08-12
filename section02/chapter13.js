// 1. Promise

// 기본 Promise 예제
const promise = new Promise(() => {
  // executer: 비동기 작업 실행하는 함수
  setTimeout(() => {
    console.log("안녕!"); // 2초 후에 "안녕!" 출력
  }, 2000);
});

console.log(promise);
// 결과: Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

// Promise의 resolve 사용 예제
const promiseV2 = new Promise((resolve, reject) => {
  // executer: 비동기 작업 실행하는 함수
  setTimeout(() => {
    console.log("안녕!"); // 2초 후에 "안녕!" 출력
    resolve(); // Promise가 성공적으로 완료되었음을 알림 (인수를 전달하지 않으면 PromiseResult는 undefined)
  }, 2000);
});

setTimeout(() => {
  console.log(promiseV2);
  // 결과: Promise {<pending>}
  // [[Prototype]]: Promise
  // [[PromiseState]]: "fulfilled"
  // [[PromiseResult]]: undefined
}, 3000);

// Promise의 reject 사용 예제
const promiseV3 = new Promise((resolve, reject) => {
  // executer: 비동기 작업 실행하는 함수
  setTimeout(() => {
    console.log("안녕!"); // 2초 후에 "안녕!" 출력
    reject("실패: 이유..."); // Promise가 실패했음을 알림
  }, 2000);
});

setTimeout(() => {
  console.log(promiseV3);
  // 결과: Uncaught (in promise) 실패: 이유...
  // Promise {<pending>}
  // [[Prototype]]: Promise
  // [[PromiseState]]: "rejected"
  // [[PromiseResult]]: "실패: 이유..."
}, 3000);

// resolve와 reject 조건에 따라 다르게 처리하는 Promise
const promiseV4 = new Promise((resolve, reject) => {
  // executer: 비동기 작업 실행하는 함수
  setTimeout(() => {
    const num = 11;

    if (typeof num === "number") {
      resolve(num + 10); // 숫자일 경우 10을 더한 값을 전달 (PromiseResult에 21이 저장됨)
    } else {
      reject("num이 숫자가 아닙니다!"); // 숫자가 아닌 경우 에러 메시지 전달 (PromiseResult에 에러 메시지가 저장됨)
    }
  }, 2000);
});

// then 메서드를 사용한 Promise 처리
// -> Promise가 성공했을 때와 실패했을 때를 처리
promiseV4
  .then((value) => {
    console.log(value); // 결과: 21
  })
  .catch((error) => {
    console.log(error); // 결과: num이 숫자가 아닙니다!
  });

// add10 함수
// -> 입력된 숫자에 10을 더한 결과를 반환하는 Promise를 생성
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // executer: 비동기 작업 실행하는 함수
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // 숫자일 경우 10을 더한 값을 전달 (PromiseResult에 값이 저장됨)
      } else {
        reject("num이 숫자가 아닙니다!"); // 숫자가 아닌 경우 에러 메시지 전달 (PromiseResult에 에러 메시지가 저장됨)
      }
    }, 2000);
  });
  return promise;
}

// add10 함수와 Promise 체이닝
add10(0)
  .then((result) => {
    console.log(result); // 결과: 10
    return add10(result); // 결과: 20
  })
  .then((result) => {
    console.log(result); // 결과: 20
    return add10(undefined); // 숫자가 아니므로 에러 발생
  })
  .then((result) => {
    console.log(result); // 이 부분은 실행되지 않음
    return add10(result);
  })
  .catch((error) => {
    console.log(error); // 결과: num이 숫자가 아닙니다!
  });
