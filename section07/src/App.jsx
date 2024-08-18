import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
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

// Context
// App -> List -> ToDoItem: props drilling이 발생합니다.
// 이는 여러 단계의 자식 컴포넌트에 걸쳐 동일한 props를 전달해야 할 때 문제가 됩니다.
// 하나의 데이터를 변경하려면 그 데이터를 전달하는 모든 자식 컴포넌트들을 수정해야 하기 때문에 관리가 어려워집니다.
// Context는 데이터를 중앙에서 관리하여 하위 컴포넌트들이 직접 접근할 수 있게 함으로써 props drilling 문제를 해결합니다.
// 컴포넌트가 리렌더링될 때마다 Context를 생성할 필요가 없기 때문에, Context는 컴포넌트 외부에 선언하는 것이 일반적입니다.
// export const TodoContext = createContext();

// Context 분리
// Provider도 컴포넌트이므로 하나의 Context로 모든 데이터를 전달할 경우, props가 업데이트될 때마다 해당 Context에 포함된 함수들도 모두 새로 생성되는 문제가 발생합니다.
// 예를 들어, todos 상태가 변경될 때마다 이를 전달하는 객체가 새로 생성되어, memo를 적용한 함수들 또한 재생성될 수 있습니다.
// 이를 방지하기 위해, 변경될 수 있는 값(todos)과 변경되지 않는 값(함수들)을 분리하여 각각의 Context로 관리합니다.
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

  // useMemo를 사용하여 memoizedDispatch 객체를 메모이제이션합니다.
  // onCreate, onUpdate, onDelete 함수를 한 번만 생성하고, 이를 하위 컴포넌트로 전달합니다.
  // 함수들이 변경되지 않으면 동일한 참조를 사용하여 불필요한 리렌더링을 방지하고 성능을 최적화합니다.
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
