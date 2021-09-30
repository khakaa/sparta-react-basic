import React from "react";
import { useSelector } from "react-redux";
import { Container, Button, Highlight } from "./elements";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { setScore } from "./redux/modules/ranking";

const Score = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const quiz_name = useSelector((state) => state.quiz.quiz_name);
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

  const _score =
    (100 / quiz_list.length) *
    quiz_list.filter((q, idx) => {
      return q.answer === user_answer_list[idx];
    }).length;

  const score = Math.round(_score);
  // console.log(_score, score);

  return (
    <Container is_main>
      <h3>
        <Highlight>{quiz_name}</Highlight> 퀴즈에 대한 내 점수는 <br />
        <Highlight> {score}점 </Highlight>
      </h3>

      <p>우와! 우린 참 친해요!</p>

      <Button
        onClick={() => {
          dispatch(setScore(score));
          history.push("/message");
        }}
      >
        {quiz_name}에게 한 마디
      </Button>
    </Container>
  );
};

export default Score;
