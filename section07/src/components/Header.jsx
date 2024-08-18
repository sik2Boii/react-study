import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const memoizedHeader = memo(Header);

// React.memo를 사용하여 Header 컴포넌트의 불필요한 리렌더링을 방지합니다.
// Header 컴포넌트는 외부에서 전달되는 Props가 없으므로, 매번 동일한 내용을 렌더링합니다.
// React.memo를 사용하면 상태나 Props가 변경되지 않는 한 컴포넌트를 다시 렌더링하지 않으므로 성능을 최적화할 수 있습니다.
export default memo(Header);
