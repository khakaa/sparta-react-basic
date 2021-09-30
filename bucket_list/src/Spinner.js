import React from "react";
import styled from "styled-components";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const Spinner = (props) => {
  return (
    <Outter>
      <LocalFloristIcon style={{ color: "#673ab7", fontSize: "200px" }} />
    </Outter>
  );
};

const Outter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5d6ff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Spinner;
