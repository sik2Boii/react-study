import { useState } from "react";
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

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
