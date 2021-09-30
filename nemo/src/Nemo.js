import React from "react";

const Nemo = (props) => {
  // count = state 값, setCount = state를 변경하는 값
  const [count, setCount] = React.useState(3);
  console.log(count);
  const nemo_count = Array.from({ length: count }, (v, i) => i);

  const addNemo = () => {
    setCount(count + 1);
  };

  const removeNemo = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      window.alert("네모가 없어용 ㅠ");
    }
  };
  return (
    <>
      {nemo_count.map((n, i) => {
        return (
          <div
            key={i} // map을 돌릴 땐 key값을 지정해준다
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#bbb",
              margin: "10px",
            }}
          >
            nemo
          </div>
        );
      })}

      <div>
        <button
          onClick={addNemo}
          // onClick={() => {
          //   this.addNemo();
          // }} // = this.addNemo () 괄호는 붙여주면 안됨 -> 즉시실행되기 때문
        >
          하나 추가
        </button>
        <button
          onClick={removeNemo}
          // onClick={() => {
          //   this.removeNemo();
          // }}
        >
          하나 빼기
        </button>
      </div>
    </>
  );
};

export default Nemo;
