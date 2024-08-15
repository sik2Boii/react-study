import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업(Cleanup) 함수, 정리 함수
    // 컴포넌트가 언마운트되거나, 의존성 배열에 있는 값들이 변경될 때 실행됩니다.
    // 이 컴포넌트에서는 언마운트 시에만 실행됩니다.
    return () => {
      console.log("unmount");
    };
  }, []); // 빈 의존성 배열을 사용하여, 컴포넌트 마운트 및 언마운트 시에만 실행

  return <div>짝수입니다.</div>;
};

export default Even;
