import { useState } from "react";
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

  return (
    <div className="List">
      <h4>To-Do List 👌</h4>
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
