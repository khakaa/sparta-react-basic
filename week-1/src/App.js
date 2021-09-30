// import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          border: " 0.5px solid gray",
          padding: "20px",
          width: "200px",
          margin: "30px auto",
        }}
      >
        <h1 style={{ color: "green" }}>안녕하세요!</h1>
        <hr></hr>
        <p style={{ textAlign: "left" }}>이름을 입력해주세요</p>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default App;
