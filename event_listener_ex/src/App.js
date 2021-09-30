import "./App.css";
import React from "react";
import Text from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.circle = React.createRef(null);
  }

  hoverEvent = (e) => {
    console.log(e.target); // e.target => event가 발생한 요소를 가져온다.
    console.log(this.circle.current);

    this.circle.current.style.background = "yellow";
  };

  componentDidMount() {
    console.log(this.circle);
    this.circle.current.addEventListener("mouseover", this.hoverEvent); // (어떤 이벤트, 어떤 행동할래)
  }

  componentWillUnmount() {
    // 컴포넌트가 사라질때는 eventlistener를 지워준다,
    this.circle.current.removeEventListener("moseover", this.hoverEvent);
  }

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
        <Text />
        <div
          style={{
            margin: "auto",
            width: "250px",
            height: "250px",
            background: "green",
            borderRadius: "250px",
          }}
          ref={this.circle}
        ></div>
      </div>
    );
  }
}

export default App;
