// 1. 반복문 (for문)
// 지정된 횟수만큼 반복하며 코드를 실행합니다.
for (let idx = 0; idx <= 10; idx++) {
    // idx가 짝수일 경우, 아래 코드를 건너뛰고 다음 반복으로 넘어갑니다.
    if (idx % 2 === 0) {
        continue;
    }
    // idx가 홀수일 경우에만 출력됩니다.
    console.log(idx);

    // idx가 5 이상이면 반복문을 강제 종료합니다.
    if (idx >= 5) {
        break;
    }
}