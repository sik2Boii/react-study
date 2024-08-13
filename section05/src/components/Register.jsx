import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름 입력 필드
// 2. 생년월일 입력 필드
// 3. 국적 선택 필드
// 4. 자기소개 입력 필드

const Register = () => {
  // 각각의 입력 필드에 대한 상태 관리
  const [name, setName] = useState("이름"); // 이름 상태 변수와 업데이트 함수
  const [birth, setBirth] = useState(""); // 생년월일 상태 변수와 업데이트 함수
  const [country, setCountry] = useState(""); // 국적 상태 변수와 업데이트 함수
  const [bio, setBio] = useState(""); // 자기소개 상태 변수와 업데이트 함수

  // 입력 필드의 값이 변경될 때 상태를 업데이트하는 함수들
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      {/* 이름 입력 필드 */}
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>

      {/* 생년월일 입력 필드 */}
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      {/* 국적 선택 필드 */}
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      {/* 자기소개 입력 필드 */}
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
