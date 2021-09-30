import styled, { keyframes } from "styled-components";

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}
// 자기가 선언된 곳 보다 위에 있으면 읽을 수 없음
const boxAnimation = keyframes`
  0% {
  border-radius: 0px;
  top: 20px;
  }
  30%{
    top: 300px;
  }
  50%{
  border-radius: 50px;
    top: 700px;
  }
  100%{
  border-radius: 0px;
  top: 20px;

  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 0px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear alternate;
`;

export default App;
