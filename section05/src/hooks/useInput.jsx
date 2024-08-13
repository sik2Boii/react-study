import { useState } from "react";

// useInput 커스텀 훅
// 커스텀 훅을 만들 때 함수 이름 앞에 use 키워드를 사용해야 합니다.
// React는 이름이 "use"로 시작하는 함수를 훅으로 인식하고, 훅의 규칙을 적용합니다.
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
