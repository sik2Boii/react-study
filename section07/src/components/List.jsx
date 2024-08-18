import { useMemo, useState } from "react";
import "./List.css";
import ToDoItem from "./ToDoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // useMemo
  // 불필요한 연산을 방지합니다.
  // "메모이제이션(Memoization)" 기법을 기반으로 불필요한 연산을 최적화하는 React 훅입니다.
  // todos 배열이 변경될 때만 계산이 수행되도록 하여 불필요한 연산을 피합니다.
  // filter 함수는 배열을 순회하며 조건에 맞는 요소를 찾기 때문에 데이터의 양이 많아질수록 성능에 영향을 줄 수 있습니다.
  // useMemo를 사용하면 todos가 변경되지 않는 한 이전에 계산된 값을 재사용하므로, 계산 성능을 최적화할 수 있습니다.
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>To-Do List 👌</h4>
      <div>
        <div>📝: {totalCount}</div>
        <div>🙆‍♂️: {doneCount}</div>
        <div>🙅‍♂️: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
              {...todo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
