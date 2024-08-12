// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 현재 날짜와 시간을 나타내는 Date 객체 생성
console.log(date1); // 결과: Mon Aug 12 2024 14:45:30 GMT+0900 (한국 표준시)

let date2 = new Date("1997-02-13"); // 특정 날짜를 기반으로 Date 객체 생성
console.log(date2); // 결과: Thu Feb 13 1997 09:00:00 GMT+0900 (한국 표준시)

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로부터 몇 ms가 지났는지를 나타내는 숫자값
let ts1 = date1.getTime();
console.log(ts1); // 결과: 1723441530369 (현재 시간의 타임스탬프)

// 타임스탬프를 기반으로 새로운 Date 객체를 생성
let date4 = new Date(ts1);
console.log(date4); // 결과: Mon Aug 12 2024 14:45:30 GMT+0900 (한국 표준시)

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 연도 추출
let month = date1.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
let date = date1.getDate(); // 일 추출

let hour = date1.getHours(); // 시 추출
let minute = date1.getMinutes(); // 분 추출
let seconds = date1.getSeconds(); // 초 추출

console.log(year, month, date, hour, minute, seconds); // 결과: 2024 8 12 14 45 30

// 4. 시간 수정하기
date1.setFullYear(2023); // 연도 수정
date1.setMonth(11); // 월 수정 (12월이 되므로 11 설정)
date1.setDate(31); // 일 수정
date1.setHours(23); // 시 수정
date1.setMinutes(59); // 분 수정
date1.setSeconds(59); // 초 수정

console.log(date1); // 결과: Sun Dec 31 2023 23:59:59 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 결과: Sun Dec 31 2023 (날짜만 출력)
console.log(date1.toLocaleString()); // 결과: 2023. 12. 31. 오후 11:59:59 (로컬 형식으로 출력)
