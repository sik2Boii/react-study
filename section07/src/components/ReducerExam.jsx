import { useReducer } from "react";

// reducer: 변환기
// 현재 상태(state)와 액션(action)을 받아 새로운 상태를 반환하는 역할을 합니다.
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const ReducerExam = () => {
  // dispatch: 보내다, 발송하다
  // 모든 useState는 useReducer로 대체 가능합니다.
  // useState는 모든 상태 관리에 사용될 수 있지만, 상태 관리 로직이 복잡해질 때는 useReducer가 더 적합합니다.
  // useState와 달리, useReducer는 상태 변경 로직을 컴포넌트 외부로 분리할 수 있어 코드 구조가 명확해지고 유지보수성이 향상됩니다.
  const [state, dispatch] = useReducer(reducer, 0);

  // 상태를 증가시키는 함수
  // 액션 객체를 dispatch 함수에 전달하여 상태를 업데이트합니다.
  const onClickPlus = () =>
    dispatch({
      type: "INCREASE", // INCREASE 액션을 발송(dispatch)
      data: 1,
    });

  // 상태를 감소시키는 함수
  // 액션 객체를 dispatch 함수에 전달하여 상태를 업데이트합니다.
  const onClickMinus = () =>
    dispatch({
      type: "DECREASE", // DECREASE 액션을 발송(dispatch)
      data: 1,
    });

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default ReducerExam;
