import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Label from "./Components/Label";
import Featured from "./Components/Featured";
import Offer from "./Components/Offer";
import Arrival from "./Components/Arrival";
import Newsletter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import Span from "./Components/Span";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <Span />
        <Label />
        <Featured />
        <Offer />
        <Arrival />
        <Newsletter />
        <Footer />
      </header>
    </div>
  );
}

export default App;
