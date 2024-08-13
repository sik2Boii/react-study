import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

// 부모 컴포넌트(루트 컴포넌트)
// 모든 자식 컴포넌트를 포함하는 최상위 컴포넌트입니다.
function App() {
  // props는 객체로도 전달이 가능합니다
  // const buttonProps = {
  //   text: "카페",
  //   color: "green",
  //   a: 1,
  //   b: 2,
  // };

  // 화면이 리렌더링되기 위해서는 일반 자바스크립트 변수가 아닌 React의 상태(state)를 사용해야 합니다.
  // let light = "OFF"; // 일반 변수 사용 예시 (사용하지 않음)

  // count 상태 변수와 setCount 상태 업데이트 함수를 선언
  // const [count, setCount] = useState(0); // count의 초기값을 0으로 설정

  // light 상태 변수와 setLight 상태 업데이트 함수를 선언
  // const [light, setLight] = useState("OFF"); // light의 초기값을 "OFF"로 설정

  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Footer /> */}

      {/* text와 color를 직접 전달 */}
      {/* <Button text={"메일"} color={"red"} /> */}

      {/* 스프레드 문법을 사용해 buttonProps 객체를 전달 */}
      {/* <Button {...buttonProps} /> */}

      {/* 버튼의 children으로 전달될 자식 요소 */}
      {/* <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button> */}

      {/* <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div> */}

      {/* <div>
        <h1>{light}</h1>
        <Bulb light={light} />
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div> */}

      {/* <Counter />
      <Bulb /> */}

      {/* <Register /> */}

      <HookExam />
    </>
  );
}

export default App;
