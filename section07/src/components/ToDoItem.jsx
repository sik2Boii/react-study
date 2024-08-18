import { memo, useContext } from "react";
import "./ToDoItem.css";
import { TodoContext } from "../App";

const ToDoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ToDoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 객체 타입은 주소값으로 비교되기 때문에, 리렌더링 시 모든 함수들이 새로운 주소값을 가지게 되어 동일한 값이라도 다른 값으로 인식됩니다.
// 이로 인해 useMemo가 예상과 다르게 동작할 수 있습니다.
// 이런 경우 useCallback을 사용하거나, 주소값이 아닌 실제 값을 비교해야 합니다.
// export default memo(ToDoItem, (prevProps, nextProps) => {
// 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단합니다.
// true를 반환하면 Props가 변경되지 않았음을 의미하며, 리렌더링을 방지합니다.
// false를 반환하면 Props가 변경되었음을 의미하며, 리렌더링이 발생합니다.
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(ToDoItem);
