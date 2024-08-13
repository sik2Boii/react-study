// Button 컴포넌트
// 버튼 요소를 렌더링하며, text와 color를 props로 받아서 사용합니다.
// children을 통해 자식 요소를 포함할 수 있습니다.

const Button = ({ text, color, children }) => {
  // 클릭 이벤트 핸들러 함수
  const onClickButton = (e) => {
    console.log(e); // 결과: SyntheticBaseEvent(합성 이벤트 객체), 모든 브라우저에서 사용 가능한 통합 이벤트 객체
    console.log(text);
  };
  return (
    <button
      // 버튼에 직접 익명 함수를 사용하여 이벤트를 지정
      //   onClick={() => {
      //     console.log(text);
      //   }}

      // 미리 정의된 함수를 사용하여 이벤트를 지정
      // 이때, onClickButton() 형태가 아닌 함수 이름만 전달합니다.
      onClick={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// 기본 props 설정
// color prop이 전달되지 않을 경우, 기본값으로 "blue"가 사용됩니다.
Button.defaultProps = {
  color: "blue",
};

export default Button;
