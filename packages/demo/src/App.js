import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { FaFolder, MdAccessibility, IconContext } from "react-icons";

class App extends Component {
  render() {
    return (
      <IconContext.Provider value={{ color: "blue" }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <MdAccessibility />
            <FaFolder />
          </p>
        </div>
      </IconContext.Provider>
    );
  }
}

export default App;
