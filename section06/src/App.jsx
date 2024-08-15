import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // React의 state는 비동기로 업데이트되기 때문에, 변경된 값을 바로 사용하려면 useEffect를 사용해야 합니다.
  useEffect(() => {
    // console.log(`count: ${count} / input: ${input}`);
    // 의존성 배열(dependency array, deps)
    // useEffect가 언제 실행될지를 결정하는 배열입니다.
    // 의존성 배열이 빈 배열([])일 경우, useEffect는 컴포넌트가 마운트될 때 한 번만 실행됩니다.
    // 의존성 배열에 특정 상태나 props를 추가하면, 해당 값이 변경될 때마다 useEffect가 실행됩니다.
  }, [count, input]);

  // 1. 마운트: 컴포넌트가 처음 렌더링될 때 실행
  useEffect(() => {
    console.log("mount");
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  // 2. 업데이트: 컴포넌트의 상태나 props가 변경될 때마다 실행
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트: 컴포넌트가 제거될 때 실행
  // Even.jsx

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      {/* 입력 필드 섹션 */}
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>

      {/* 카운터 값 표시 섹션 */}
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      {/* 카운터 컨트롤러 섹션 */}
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
