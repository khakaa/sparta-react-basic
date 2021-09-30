import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 3 };
  }

  componentDidMount() {}

  addNemo = () => {
    this.setState({ count: this.state.count + 1 }); // state를 바꿔주는 것
  };

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없어용 ㅠ");
    }
  };

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    console.log(nemo_count); // console 자주 확인하면 좋다
    console.log(this.state);
    return (
      <div className="App">
        <Nemo />
      </div>
    );
  }
}
export default App;
