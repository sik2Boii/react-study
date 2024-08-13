import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름 입력 필드
// 2. 생년월일 입력 필드
// 3. 국적 선택 필드
// 4. 자기소개 입력 필드

const Register = () => {
  // 모든 입력 필드를 객체 하나로 상태 관리
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // useRef를 사용하여 리렌더링 없이 상태를 저장하는 변수 선언
  // countRef.current로 접근하며, 값이 변경되어도 컴포넌트는 리렌더링되지 않음
  const countRef = useRef(0); // {current: 0}

  // 일반 자바스크립트 변수 사용
  // 컴포넌트가 리렌더링될 때마다 초기화되기 때문에 지속적인 값 저장이 불가능
  let count = 0;

  // 특정 DOM 요소에 직접 접근하기 위한 ref 선언
  const inputRef = useRef();

  // 입력 필드의 값이 변경될 때 상태를 업데이트하는 함수
  // 이벤트가 발생한 입력 필드의 이름과 값을 사용해 상태를 업데이트
  const onChange = (e) => {
    countRef.current++; // ref의 current 값을 증가시키지만 리렌더링은 발생하지 않음
    console.log(countRef.current);
    setInput({
      ...input, // 기존 상태를 복사하고
      [e.target.name]: e.target.value, // 변경된 필드만 업데이트
    });
  };

  const onsubmit = () => {
    // 이름이 입력되지 않았다면 이름 입력 필드에 포커스를 설정
    if (input.name === "") {
      inputRef.current.focus(); // inputRef를 통해 DOM 요소에 직접 접근하여 포커스 설정
    }
  };

  return (
    <div>
      {/* 이름 입력 필드 */}
      <div>
        <input
          ref={inputRef} // inputRef를 사용해 이 DOM 요소에 접근
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      {/* 생년월일 입력 필드 */}
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      {/* 국적 선택 필드 */}
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      {/* 자기소개 입력 필드 */}
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onsubmit}>제출</button>
    </div>
  );
};

export default Register;
