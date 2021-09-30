import React from "react";
import img from "./scc_img01.png";
import styled from "styled-components";

const Start = (props) => {
  console.log(props);
  return (
    <Wrap>
      <img src={img} alt="르탄이" />
      <h1 style={{ textAlign: "center", lineHeight: "1.5" }}>
        나는
        <Who>{props.name}</Who>에 대해 얼마나 알고 있을까?
      </h1>
      <Name type="text" />
      <StartBtn>시작하기</StartBtn>
    </Wrap>
  );
};

const Wrap = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    height: 100vh;
  }
`;

const Who = styled.span`
   {
    background-color: #fef5d4;
    border-radius: 20px;
    padding: 5px;
  }
`;

const Name = styled.input`
   {
    width: 100%;
    padding: 10px;
    border: 2px solid #dadafc;
    border-radius: 20px;
    marigin-bottom: 10px;
  }
`;

const StartBtn = styled.button`
   {
    padding: 10px;
    background-color: #dadafc;
    border: #dadafc;
    border-radius: 20px;
    margin: 36px auto;
  }
`;
export default Start;
