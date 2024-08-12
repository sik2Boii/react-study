// 1. async
// -> 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 변환해주는 역할을 합니다.
async function getData() {
  return {
    name: "임준식",
    id: "sik2Boii",
  };
}

console.log(getData());
// 결과: Promise {<fulfilled>: {…}}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
// id: "sik2Boii"
// name: "임준식"
// [[Prototype]]: Object

// 2. await
// -> async 함수 내부에서만 사용 가능한 키워드
// -> 비동기 함수의 처리가 완료될 때까지 기다립니다.

// 기존의 비동기 처리 방식 (then 사용)
function printData() {
  getData().then((result) => {
    console.log(result); // 비동기 작업이 완료된 후에 데이터를 출력합니다.
  });
}

printData(); // 결과: {name: '임준식', id: 'sik2Boii'}

// async와 await를 사용한 비동기 처리
async function printDataV2() {
  const data = await getData(); // 비동기 작업이 완료될 때까지 기다렸다가 data에 할당합니다.
  console.log(data);
}

printDataV2(); // 결과: {name: '임준식', id: 'sik2Boii'}
