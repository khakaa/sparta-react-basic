import React from "react";

const Text = (props) => {
  const text = React.useRef(null);

  const hoverEvent = () => {
    text.current.style.background = "yellow";
  };
  // 컴포넌트가 첫 렌더링이 되면 화살표 함수를 무조건 실행한다
  // 두번째 렌더링 (리렌더링)이 되면 dependency Array 요소를 확인하고 요소가 바뀐게 있을 때만 화살표 함수 실행
  // componentDidMount + componentDidUpdate
  React.useEffect(() => {
    text.current.addEventListener("mouseover", hoverEvent);

    // componentwillunmount 역할을 하는 부분
    return () => {
      text.current.removeEventListener("mouseover", hoverEvent);
    };
  }, []);
  return <h1 ref={text}> 텍스트 입니다!</h1>;
};

export default Text;
