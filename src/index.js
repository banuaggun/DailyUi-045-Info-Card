import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card/Card";

function App() {
  return (
    <div className="app">
      <Card />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
