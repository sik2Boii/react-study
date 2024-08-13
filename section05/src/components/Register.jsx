import { useState } from "react";

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

  // 입력 필드의 값이 변경될 때 상태를 업데이트하는 함수
  // 이벤트가 발생한 입력 필드의 이름과 값을 사용해 상태를 업데이트
  const onChange = (e) => {
    setInput({
      ...input, // 기존 상태를 복사하고
      [e.target.name]: e.target.value, // 변경된 필드만 업데이트
    });
  };

  return (
    <div>
      {/* 이름 입력 필드 */}
      <div>
        <input
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
    </div>
  );
};

export default Register;
