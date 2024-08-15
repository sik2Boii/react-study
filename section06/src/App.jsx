import { useState, useEffect } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // React의 state는 비동기로 업데이트되기 때문에, 변경된 값을 바로 사용하려면 useEffect를 사용해야 합니다.
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

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
      </section>

      {/* 카운터 컨트롤러 섹션 */}
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
