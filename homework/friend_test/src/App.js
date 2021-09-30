import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Start from "./Start";
import Quiz from "./Quiz";
import Ranking from "./Ranking";
import Message from "./Message";
import Score from "./Score";
import index.css from "./index.css"
function App() {
  // const [name, setName] = React.useState("르탄이");
  return (
    <div className="App">
      <Route path="/" exact>
        <Start />
      </Route>

      <Route path="/quiz">
        <Quiz />
      </Route>

      <Route path="/score">
        <Score />
      </Route>

      <Route path="/ranking" exact>
        <Ranking />
      </Route>

      <Route path="/message" exact>
        <Message />
      </Route>
    </div>
  );
}

export default App;
