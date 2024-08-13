// Button 컴포넌트
// 버튼 요소를 렌더링하며, text와 color를 props로 받아서 사용합니다.
// children을 통해 자식 요소를 포함할 수 있습니다.

const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
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
