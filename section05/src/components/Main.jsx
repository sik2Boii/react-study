import "./Main.css";

// 컴포넌트 생성 시 함수 이름은 반드시 대문자로 시작해야 합니다.
// 클래스 기반 컴포넌트도 가능하지만, 코드가 길어져서 일반적으로 선호되지 않습니다.
// 함수 선언 방식 또는 화살표 함수 방식으로 컴포넌트를 생성할 수 있습니다.

// 자식 컴포넌트 (함수 선언 방식)
// JSX 작성 시 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있습니다.
// 2. 숫자, 문자열, 배열 값만 렌더링 됩니다.
// 3. 모든 태그는 닫혀 있어야 합니다.
// 4. 최상위 태그는 반드시 하나여야만 합니다.

function Main() {
  const user = {
    name: "임준식",
    isLogin: false,
  };

  if (user.isLogin) {
    return (
      <main
        style={{
          // 해당 컴포넌트에 직접 스타일을 줄 때는 카멜 표기법을 사용합니다.
          backgroundColor: "green",
          borderBottom: "5px solid blue",
        }}
      >
        로그아웃
      </main>
    );
  } else {
    // 외부 CSS 파일에서 클래스를 연동하여 스타일링 (일반적으로 추천되는 방법입니다)
    return <main className="login">로그인</main>;
  }

  // return (
  //   // JSX에서는 부모 요소가 하나만 있어야 합니다.
  //   // <div></div> // 오류 발생
  //   <main> {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>} </main>
  // );
}

export default Main;
