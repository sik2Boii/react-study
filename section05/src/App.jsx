import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";

// 부모 컴포넌트(루트 컴포넌트)
// 모든 자식 컴포넌트를 포함하는 최상위 컴포넌트입니다.
function App() {
  // props는 객체로도 전달이 가능합니다
  const buttonProps = {
    text: "카페",
    color: "green",
    a: 1,
    b: 2,
  };

  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Footer /> */}

      {/* text와 color를 직접 전달 */}
      <Button text={"메일"} color={"red"} />

      {/* 스프레드 문법을 사용해 buttonProps 객체를 전달 */}
      <Button {...buttonProps} />

      {/* 버튼의 children으로 전달될 자식 요소 */}
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;
