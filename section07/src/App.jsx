import { useCallback, useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

// 임시 데이터
// 컴포넌트 함수 밖에 선언하여 리렌더링 시 불필요한 재초기화를 방지합니다.
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "헬스하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "React 복습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      // 대상 항목을 제외한 나머지 항목들로 상태를 업데이트
      return state.filter((item) => item.id !== action.targetId);
    default:
      state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback
  // 메모이제이션된 콜백 함수를 생성합니다.
  // 컴포넌트가 리렌더링될 때마다 동일한 함수가 새로 생성되는 것을 방지하여 성능을 최적화합니다.
  // 의존성 배열([])에 빈 배열을 전달하면, 컴포넌트가 처음 마운트될 때 한 번만 함수가 생성됩니다.
  // 기능 구현을 먼저 하고, 이후에 최적화를 진행하는 것이 권장됩니다.
  // 최적화 후 기능을 추가하거나 수정할 때 최적화가 풀리거나 문제가 발생할 수 있습니다.
  // 모든 컴포넌트에 useCallback을 적용하기보다는, 함수의 갯수가 많거나 코드가 무거운 컴포넌트에만 사용하는 것이 좋습니다.
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
