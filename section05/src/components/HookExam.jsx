import useInput from "../hooks/useInput";

// 1. 훅(Hook)은 함수 컴포넌트 또는 다른 훅(커스텀 훅 포함) 내부에서만 호출할 수 있습니다.
// 함수 외부에서 훅을 호출하면 오류가 발생합니다.
// const state = useState();

const HookExam = () => {
  // 2. 훅은 조건부로 호출될 수 없습니다.
  // 조건문이나 반복문 내부에서 훅을 호출하면 오류가 발생합니다.
  //   if (true) {
  //     const state = useState(); // 조건문 내부에서 훅을 호출하면 오류 발생
  //   }
  //   for (;;) {
  //     const state = useState(); // 반복문 내부에서 훅을 호출하면 오류 발생
  //   }

  // 3. 나만의 훅(Custom Hook)을 직접 만들 수 있습니다.
  // useInput 커스텀 훅을 사용하여 입력 상태를 관리합니다.
  const [input, onChange] = useInput();
  const [inputV2, onChangeV2] = useInput();

  return (
    <div>
      {/* 첫 번째 입력 필드 */}
      <input value={input} onChange={onChange} />

      {/* 두 번째 입력 필드 */}
      <input value={inputV2} onChange={onChangeV2} />
    </div>
  );
};

export default HookExam;
