import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { IconContext } from "react-icons";
import { MdAccessibility } from "react-icons/lib/md";
import { FaFolder } from "react-icons/lib/fa";

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
            <FaFolder color="red" className="additional-class-name" />
          </p>
        </div>
      </IconContext.Provider>
    );
  }
}

export default App;
