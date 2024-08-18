import { useReducer, useRef } from "react";
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

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
