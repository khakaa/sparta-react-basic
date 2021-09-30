import React from "react";
import img from "./scc_img01.png";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";

import { Highlight, Button, Img, Container } from "./elements";

const Quiz = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

  const setAnswer = (user_answer) => {
    dispatch(addAnswer(user_answer));
  };

  React.useEffect(() => {
    if (user_answer_list.length === quiz_list.length) {
      history.push("/score");
      return;
    }
  }, [user_answer_list]); // user_answer_list 가 변할때 마다 실행하는 함수

  // if (user_answer_list.length === quiz_list.length) {
  //   return null;
  // }

  return (
    <Container>
      <Highlight>{user_answer_list.length + 1}번 문제</Highlight>
      <h3>{quiz_list[user_answer_list.length].question}</h3>
      <Img src={img} />

      <div>
        <Button
          onClick={() => {
            setAnswer(true);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}
        >
          O
        </Button>
        <Button
          onClick={() => {
            setAnswer(false);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}
        >
          X
        </Button>
      </div>
    </Container>
  );
};

export default Quiz;
