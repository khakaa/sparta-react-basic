import React, { useEffect } from "react";
import styled from "styled-components";
import img from "./scc_img01.png";
import { Img } from "./elements";

import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { setMessage } from "./redux/modules/ranking";

const Message = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const message_ref = React.useRef(null);
  const quiz_name = useSelector((state) => state.quiz.quiz_name);
  return (
    <MessageWrap>
      <Outter>
        <Img src={img} />
        <h3>
          <Name>{quiz_name}</Name>에게 남기는 한마디
        </h3>
        <Input ref={message_ref} />
        <Button
          onClick={() => {
            dispatch(setMessage(message_ref.current.value));
            history.push("/ranking");
          }}
        >
          남기고 랭킹 보러가기
        </Button>
      </Outter>
    </MessageWrap>
  );
};

const MessageWrap = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  overflow: "hidden";
  /* padding: 16px; */
  box-sizing: "border-box";
`;

const Outter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: "hidden";
  box-sizing: "border-box";
  max-width: "400px";
  margin: 0px auto;
`;

const Name = styled.span`
  background-color: #fef5d4;
  padding: 5px 10px;
  border-radius: 30px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 24px 0px;
  border: 1px solid #dadafc;
  border-radius: 30px;
  width: 80%;
  height: 50px;
`;

const Button = styled.button`
  padding: 8px 24px;
  background-color: #dadafc;
  border-radius: 30px;
  border: #dadafc;
`;
export default Message;
