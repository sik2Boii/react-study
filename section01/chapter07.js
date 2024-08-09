// 1. if 조건문 (if문)
// 주어진 조건에 따라 코드 블록을 실행합니다.
let num = 10;

if (num >= 10) {
    // console.log("num이 10 이상일 때 실행됩니다.");
    // console.log("if문은 if로 시작해야합니다.");
}
else if (num >= 5) {
    // console.log("num이 5 이상 10 미만일 때 실행됩니다.");
    // console.log("else if를 사용하면 여러 조건을 사용할 수 있습니다.");
}
else {
    // console.log("위의 조건들이 모두 거짓일 때 실행됩니다.");
    // console.log("else는 선택 사항이며, 필요에 따라 사용할 수 있습니다.");
}

// 2. switch문
// 여러 조건을 처리할 때 if문보다 더 직관적으로 사용할 수 있습니다.
let animal = "cat";

switch (animal) {
    case "cat": {
        // animal이 "cat"일 때 실행됩니다.
        console.log("고양이");
        break;
    }
    case "dog": {
        // animal이 "dog"일 때 실행됩니다.
        console.log("강아지");
        break;
    }
    case "bear": {
        // animal이 "bear"일 때 실행됩니다.
        console.log("곰");
        break;
    }
    case "lion": {
        // animal이 "lion"일 때 실행됩니다.
        console.log("사자");
        break;
    }
    case "tiger": {
        // animal이 "tiger"일 때 실행됩니다.
        console.log("호랑이");
        break;
    }
    default: {
        // 위의 모든 조건에 해당하지 않을 때 실행됩니다.
        console.log("설정하지 않은 동물!");
    }
}