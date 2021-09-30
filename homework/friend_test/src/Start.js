import React from "react";
import img from "./scc_img01.png";
import styled from "styled-components";

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./redux/modules/ranking";
import { Container, Button, Img, Highlight } from "./elements";

const Start = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const name_ref = React.useRef(null);
  const quiz_name = useSelector((state) => state.quiz.quiz_name);

  return (
    <Container is_main>
      <Img src={img} />
      <h1 style={{ textAlign: "center", lineHeight: "1.5" }}>
        나는
        <Highlight>{quiz_name}</Highlight>에 대해 얼마나 알고 있을까?
      </h1>
      <input
        ref={name_ref}
        type="text"
        style={{
          border: "1px solid #dadafc",
          borderRadius: "30px",
          padding: "10px",
          width: "30%",
        }}
      />
      <Button
        onClick={() => {
          // console.log(name_ref.current.value);
          dispatch(setName(name_ref.current.value));
          history.push("/quiz");
        }}
      >
        {" "}
        시작하기
      </Button>
    </Container>
  );
};

export default Start;
