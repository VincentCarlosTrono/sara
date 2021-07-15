import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Label from "./Components/Label";
import Featured from "./Components/Featured";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="combine">
          <Header />
          <Body />
        </div>
        <Label />
        <Featured />
      </header>
    </div>
  );
}

export default App;
