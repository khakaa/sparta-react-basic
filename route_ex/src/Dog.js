import React from "react";
import { useHistory } from "react-router"; //hook

const Dog = (props) => {
  console.log(props);
  const history = useHistory(); // children으로 받았을 때 hook 사용
  return (
    <div
      onClick={() => {
        // props.history.push("/"); // component로 받았을 때
        history.push("/cat"); // children으로 받았을 때
      }}
    >
      강아지 화면입니다!
    </div>
  );
};

export default Dog;
