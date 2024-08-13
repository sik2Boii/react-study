import { useState } from "react";

// 자식 컴포넌트
// 자신의 state가 변경되지 않아도 부모로부터 받는 props가 변경되면 리렌더링됩니다.
// 부모 컴포넌트에서 리렌더링이 발생하면, 자식 컴포넌트도 리렌더링됩니다.
// -> 부모 컴포넌트에 의해 불필요한 리렌더링이 발생할 경우 성능 저하가 발생할 수 있습니다.
// -> 이러한 성능 저하를 방지하기 위해 기능별로 컴포넌트를 모듈화하여 사용하는 것이 중요합니다.
const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "yellow" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <div>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </div>
  );
};

export default Bulb;
