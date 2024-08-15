import React from "react";
import logo from "./pictures/logo.svg";
import catOne from "./pictures/catOne.svg";
import dogOne from "./pictures/dogOne.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={catOne} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={dogOne} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={catOne} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Zoo shop</p>
        <img src={logo} className="App-logo-reverse" alt="logo" />
        <img src={catOne} className="App-logo-reverse" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={dogOne} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo-reverse" alt="logo" />
        <img src={catOne} className="App-logo-reverse" alt="logo" />
      </header>
      <TestSection />
    </div>
  );
}

function TestSection() {
  return (
    <div className="Test-section">
      <p>My first text in component</p>
    </div>
  );
}

export default App;
