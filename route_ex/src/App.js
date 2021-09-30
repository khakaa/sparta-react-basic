import "./App.css";
import { Route, Link } from "react-router-dom";
import Cat from "./Cat";
import Dog from "./Dog";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog으로 가기</Link>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/cat" exact component={Cat} />
      <Route path="/dog" exact component={Dog} />
    </div>
  );
}

export default App;
